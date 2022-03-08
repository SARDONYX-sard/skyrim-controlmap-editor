import { useMutation, useQuery, useQueryClient } from "react-query";
import { readConfigToml } from "../api/config-io";
import { defaultSettings, TomlSettingOptions } from "../globalStates/Settings";
import { useMsg } from "./useMsg";

export function useTheme() {
  const queryClient = useQueryClient();

  const { data } = useQuery(
    "read-settings",
    async () => readConfigToml(),
    {
      enabled: false,
      initialData: defaultSettings,
    }
  );
  const { setMsg } = useMsg();

  let settings: TomlSettingOptions;
  if (data) {
    settings = data;
    setMsg("");
  } else {
    settings = defaultSettings;
    setMsg("Failed to load settings. Falling back to default settings.");
  }

  const theme = settings.general.theme;

  const setTheme = () => {
    const new_theme = theme === "dark" ? "light" : "dark";
    const new_data = {
      ...settings,
      ...{ theme: new_theme },
    };
    console.log("set theme " + new_theme);
    queryClient.setQueryData("read-settings", new_data);
  };

  return [theme, setTheme] as const;
}
