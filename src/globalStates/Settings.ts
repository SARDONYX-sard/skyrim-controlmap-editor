export const ThemeStates = {
  Light: "light",
  Dark: "dark",
} as const;
export type ThemeState = typeof ThemeStates[keyof typeof ThemeStates];

export const LangStates = {
  En: "en",
  Ja: "ja",
} as const;
export type LangState = typeof LangStates[keyof typeof LangStates];

export type TomlSettingOptions = {
  general: {
    theme: ThemeState;
    autosave: boolean;
    lang: LangState;
  };
};

export const defaultSettings: TomlSettingOptions = {
  general: {
    theme: ThemeStates.Dark,
    autosave: true,
    lang: LangStates.En,
  },
};
