export function formatKeyString(keyName: string): string {
  if (keyName.length === 1) {
    return keyName;
  }

  let displayKey = keyName.replace(/{(\w+)}?/, "$1");

  if (displayKey === "pagedown") {
    return "PageDown";
  }
  if (displayKey === "pageup") {
    return "PageUp";
  }
  if (displayKey === "prtscr") {
    return "PrintScreen";
  }

  displayKey = displayKey
    .replace(/right/, "Right")
    .replace(/left/, "Left")
    .replace(/lock/, "Lock")
    .replace(/add$/, "Add") // +
    .replace(/subtract/, "Subtract") // -
    .replace(/multiply/, "Multiply") // *
    .replace(/divide/, "Divide") // /
    .replace(/decimal/, "Decimal") // .
    .replace(/enter/, "Enter")
    .replace(/space/, "Space")
    .replace(/Key|Digit/, ""); // For real keyboard keydown event

  return displayKey[0].toUpperCase() + displayKey.slice(1, displayKey.length);
}
