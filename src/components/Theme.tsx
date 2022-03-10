import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { useTheme } from "../hooks/useTheme";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...grey,
      ...(mode === "dark" && {
        main: "#ffffff",
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: "#1d1b1b",
        paper: "#2e2929",
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#1212",
            secondary: "#bdb4b4",
          }),
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export function DarkThemeWithCustomPalette({ children }: Props) {
  const { theme } = useTheme();
  const darkModeTheme = createTheme(getDesignTokens(theme));

  return <ThemeProvider theme={darkModeTheme}>{children}</ThemeProvider>;
}
