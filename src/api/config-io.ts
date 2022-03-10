import { invoke } from "@tauri-apps/api/tauri";
import { UserKeys } from "../constants/default-user-keys";
import { TomlSettingOptions } from "../constants/default-user-settings";

type Response = { status: boolean; message: string };

export const readConfigToml = async (configFilePath = "config/config.toml") => {
  const res = await invoke<string>("read_toml", { path: configFilePath });
  console.log("res is" + res);
  return JSON.parse(res) as TomlSettingOptions;
};

export const writeConfigToml = async (
  config: TomlSettingOptions,
  configFilePath = "config/config.toml"
): Promise<Response> => {
  const res = await invoke<boolean>("write_toml", {
    path: configFilePath,
    config,
  });
  if (res) {
    return { status: res, message: "Successfully wrote config file" };
  } else {
    return { status: res, message: "Failed to write config file" };
  }
};

export const readUserKey = async (configFilePath = "config/controlmap.txt") => {
  const res = await invoke<string>("read_json", { path: configFilePath });
  console.log(res);
  return JSON.parse(res) as UserKeys;
};
