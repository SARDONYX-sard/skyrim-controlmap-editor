import { invoke } from "@tauri-apps/api/tauri";
import { TomlSettingOptions } from "../globalStates/Settings";
import { DefaultKeyConfig } from "../constants/default-key-config";

type Response = { status: boolean; message: string };

export const readConfigToml = async (configFilePath = "config/config.toml") => {
  const res = await invoke<string>("read_toml", { path: configFilePath });
  return JSON.parse(res) as TomlSettingOptions;
  console.log("res is" + res);
};

export const writeConfigToml = async (
  configFilePath = "config/config.toml",
  config: TomlSettingOptions
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
  return JSON.parse(res) as DefaultKeyConfig;
};
