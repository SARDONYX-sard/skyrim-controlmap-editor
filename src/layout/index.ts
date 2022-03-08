import { fullKeyboardLayout } from "./fullkeyboard";
import { key102layout } from "./key102layout";

export function GetKeyBoardLayout(layoutType: "102key" | "FullKeyboard") {
  if (layoutType === "102key") {
    return key102layout;
  } else if (layoutType === "FullKeyboard") {
    return fullKeyboardLayout;
  }
}
