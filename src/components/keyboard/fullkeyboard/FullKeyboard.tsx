import React from "react";
import Keyboard, { KeyboardReactInterface } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useTheme } from "../../../hooks/useTheme";
import {
  fullKeyboardLayout,
  keyboardArrowsLayout,
  keyboardControlPadLayout,
  keyboardNumPadEndLayout,
  keyboardNumPadLayout,
} from "../../../layout/fullkeyboard";
import { useQState } from "../../../shared/UseQState";
import { formatKeyString } from "../../../utils/utils";
import "./index.css";

const FullKeyboard = () => {
  const [input, setInput] = useQState("input", "");
  const [layoutName, setLayout] = useQState<"default" | "shift">(
    "layoutName",
    "default"
  );
  const [theme] = useTheme();

  const commonKeyboardOptions: KeyboardReactInterface["options"] = {
    // debug: true,
    mergeDisplay: true,
    onChange: (input: string) => onChange(input),
    onKeyPress: (button: string) => onKeyPress(button),
    physicalKeyboardHighlight: true,
    physicalKeyboardHighlightBgColor: "#345381",
    physicalKeyboardHighlightPress: true,
    physicalKeyboardHighlightPressUseClick: true,
    physicalKeyboardHighlightTextColor: "#fff",
    useButtonTag: true,
    syncInstanceInputs: true,
    theme: `hg-theme-default hg-layout-default ${theme}-theme ${theme}-btn`,
  };

  const onChange = (input: string) => {
    console.log("change  " + input);
  };

  const onKeyPress = (button: string) => {
    let displayKey = button;
    console.log("Button pressed", displayKey);
    displayKey = formatKeyString(button);
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
      setLayout("shift");
    }
  };

  const keyboardOptions = {
    ...commonKeyboardOptions,
    ...fullKeyboardLayout,
  };

  const keyboardControlPadOptions = {
    ...commonKeyboardOptions,
    ...keyboardControlPadLayout,
  };

  const keyboardArrowsOptions = {
    ...commonKeyboardOptions,
    ...keyboardArrowsLayout,
  };

  const keyboardNumPadOptions = {
    ...commonKeyboardOptions,
    ...keyboardNumPadLayout,
  };

  const keyboardNumPadEndOptions = {
    ...commonKeyboardOptions,
    ...keyboardNumPadEndLayout,
  };

  return (
    <>
      <div className={`keyboardContainer ${theme}-theme`}>
        <Keyboard
          baseClass={"simple-keyboard-main"}
          layoutName={layoutName}
          {...keyboardOptions}
        />

        <div className="controlArrows">
          <Keyboard
            baseClass={"simple-keyboard-control"}
            {...keyboardControlPadOptions}
          />
          <Keyboard
            baseClass={"simple-keyboard-arrows"}
            {...keyboardArrowsOptions}
          />
        </div>

        <div className="numPad">
          <Keyboard
            baseClass={"simple-keyboard-numpad"}
            {...keyboardNumPadOptions}
          />
          <Keyboard
            baseClass={"simple-keyboard-numpadEnd"}
            {...keyboardNumPadEndOptions}
          />
        </div>
      </div>
    </>
  );
};

export { FullKeyboard };
