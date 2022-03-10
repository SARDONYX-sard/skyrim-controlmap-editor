export const defaultUserSettings: TomlSettingOptions = {
  theme: "dark",
  autosave: false,
  lang: "en",
};

export type TomlSettingOptions = {
  theme: Theme;
  autosave: AutoSave;
  lang: Lang;
};

export type Theme = "light" | "dark";
export type AutoSave = boolean;
export type Lang = "en" | "ja";
