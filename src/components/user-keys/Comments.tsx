import React from "react";

type Props = {
  eventName: string;
  values: string[];
};

const Comments = ({ eventName, values }: Props) => {
  return (
    <ul className="comments" key={eventName}>
      {eventName}
      {values.map((comment, index) => {
        return (
          <p className="comment" key={index}>
            {comment}
          </p>
        );
      })}
    </ul>
  );
};

export { Comments };
