import { Suspense } from "react";
import "./App.css";
import { BasicSpeedDial } from "./components/SpeedDial";
import { ThemeSwitch } from "./components/Switch";
import VerticalTabs from "./components/Tab";
import { DarkThemeWithCustomPalette } from "./components/Theme";
import { useMsg } from "./hooks/useMsg";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();
  const { msg } = useMsg();

  return (
    <Suspense fallback={<h1 color="white">Loading profile...</h1>}>
      <DarkThemeWithCustomPalette>
        <div className={`App ${theme}-theme`}>
          <ThemeSwitch />
          <p>{msg}</p>
          <VerticalTabs />
        </div>
        <BasicSpeedDial />
      </DarkThemeWithCustomPalette>
    </Suspense>
  );
}

export default App;
