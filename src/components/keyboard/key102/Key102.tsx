import React from "react";
import Keyboard, {
  KeyboardButtonTheme,
  KeyboardReactInterface,
} from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useInput } from "../../../hooks/useInput";
import { useLayout } from "../../../hooks/useLayout";
import { useTheme } from "../../../hooks/useTheme";
import { GetKeyBoardLayout } from "../../../layout";
import { formatKeyString } from "../../../functions/key-changer";
import "./index.css";

type Props = {
  layoutType: "102key" | "FullKeyboard";
  keyboardOptions?: KeyboardReactInterface["options"];
};

const Keyboard102: React.VFC<Props> = ({ layoutType, keyboardOptions }) => {
  const { setInput } = useInput();
  const { layoutName, setLayout } = useLayout();
  const { theme } = useTheme();

  const onKeyPress = (button: string) => {
    console.log("Button pressed", button);
    let displayKey = formatKeyString(button);
    setInput(displayKey);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (
      button === "{shift}" ||
      button === "{shiftleft}" ||
      button === "{shiftright}" ||
      button === "{capslock}"
    ) {
      setLayout();
    }
  };

  const buttonThemes: KeyboardButtonTheme[] = [
    {
      class: "hg-red",
      buttons: "Q W E R T Y q w e r t y",
    },
    {
      class: "hg-highlight",
      buttons: "Q q",
    },
  ].filter((buttonTheme) => buttonTheme.buttons !== "");

  const commonKeyboardOptions: KeyboardReactInterface["options"] = {
    autoUseTouchEvents: true,
    buttonTheme: buttonThemes,
    layoutName,
    onKeyPress,
    onRender: () => console.log("Rendered"),
    physicalKeyboardHighlight: true,
    physicalKeyboardHighlightBgColor: "#345381",
    physicalKeyboardHighlightPress: true,
    physicalKeyboardHighlightPressUseClick: true,
    physicalKeyboardHighlightTextColor: "#fff",
    theme: `hg-theme-default hg-layout-default ${theme}-theme ${theme}-btn`,
    useButtonTag: true,
    ...GetKeyBoardLayout(layoutType),
    ...keyboardOptions,
  };

  return (
    <>
      <Keyboard {...commonKeyboardOptions} />
    </>
  );
};

export { Keyboard102 };
