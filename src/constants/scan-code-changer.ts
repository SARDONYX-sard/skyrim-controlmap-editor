import { dxScanCode, ScanKeys, ScanValues } from "./dx-scan-code";

const toScanCode = (key: ScanKeys) => {
  return dxScanCode[key];
};

const toHexCode = (value: ScanValues) => {
  return (Object.keys(dxScanCode) as ScanKeys[]).find(
    (key) => dxScanCode[key] === value
  ) as ScanKeys;
  // Use as because the arguments are limited and TypeScript is not able to reason about them.
};

export { toScanCode, toHexCode };
