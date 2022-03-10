import React from "react";
import { dxScanCode } from "../../constants/dx-scan-code";

type Props = {
  eventName: string;
  values: string[];
};

const UserKey = ({ eventName, values }: Props) => {
  return (
    <li className="user-key">
      <p>{values.join("   ")}</p>
      {eventName}:{" "}
      {values.map((v) => (
        <>
          {/* <div>{v}</div> */}
          <select style={{ width: "10em" }}>
            {Object.entries(dxScanCode).map(([key, value]) => (
              <option value={key} selected={v === key ? true : false}>
                {value}
              </option>
            ))}
          </select>
        </>
      ))}
    </li>
  );
};

export { UserKey };
