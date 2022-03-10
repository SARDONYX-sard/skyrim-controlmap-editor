import { forage } from "@tauri-apps/tauri-forage";
import { atom, useRecoilState } from "recoil";
import { Theme } from "../constants/default-user-settings";

const initState = atom<Theme>({
  key: "global/theme",
  default: "dark",
});

export function useTheme() {
  const [theme, setThemeInner] = useRecoilState(initState);

  /**
   *  Change theme dark or light
   */
  const setTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    forage.setItem({
      key: "global/theme",
      value: newTheme,
    })();

    setThemeInner((theme) => newTheme);
  };

  return { theme, setTheme };
}
