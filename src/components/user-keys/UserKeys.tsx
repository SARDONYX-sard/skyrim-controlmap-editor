import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { useUserKey } from "../../hooks/useUserKey";
import { KeyConfigEvents } from "../../constants/default-key-config";
import { Comments } from "./Comments";
import "./user-keys.css";
import { UserKey } from "./UserKey";

type Props = {};

const UserKeys = (props: Props) => {
  const [theme] = useTheme();
  const [userKey] = useUserKey();

  return (
    <ul className={`user-key-object user-key-${theme}`}>
      Main play
      {Object.entries(userKey).map(([key, value]) => {
        return Object.entries(value).map(([eventName, value], index) => {
          if (eventName === "comment") {
            return (
              <Comments eventName={eventName} values={value} key={index} />
            );
          } else {
            return <UserKey eventName={eventName} values={value} key={index} />;
          }
        });
      })}
    </ul>
  );
};

export { UserKeys };
