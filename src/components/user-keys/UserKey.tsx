import React from "react";

type Props = {
  eventName: string;
  values: string[];
};

const UserKey = ({ eventName, values }: Props) => {
  return (
    <li className="user-key">
      {eventName}: {values.join(" ")}
    </li>
  );
};

export { UserKey };
