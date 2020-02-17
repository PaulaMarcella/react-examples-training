import React from "react";

export default function Random(props) {
  const max = props.max;
  const min = props.min;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return (
    <div className="container">
      <p>
        Random value between {min} and {max} => {randomNumber}.
      </p>
    </div>
  );
}
