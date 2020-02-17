import React from "react";
import numberToStars from "../utilities/numbersToStars";

export default function Rating(props) {
  return <div className="stars">{numberToStars(props.children)}</div>;
}
