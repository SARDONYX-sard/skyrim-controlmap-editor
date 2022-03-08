import { Suspense } from "react";
import "./App.css";
import { KeyboardWrapper } from "./components/keyboard/KeyboardWrapper";
import { UserKeys } from "./components/user-keys/UserKeys";
import { useMsg } from "./hooks/useMsg";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [theme, setTheme] = useTheme();
  const { msg: message } = useMsg();

  return (
    <div className={`App ${theme}-theme`}>
      {theme} Theme
      <Suspense fallback={<h1 color="white">Loading profile...</h1>}>
        <button style={{ padding: "10px" }} onClick={() => setTheme()}>
          Change Theme
        </button>
        <p>{message}</p>
        {/* <KeyboardWrapper /> */}
        {/* <UserKeys /> */}
      </Suspense>
    </div>
  );
}

export default App;
