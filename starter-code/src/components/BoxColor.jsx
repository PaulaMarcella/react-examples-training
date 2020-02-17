import React from "react";

export default function BoxColor(props) {
  const { r, g, b } = props;
  const color = `rgb(${r}, ${g}, ${b})`;
  const divstyle = {
    backgroundColor: `${color}`
  };

  const convertToHex = (r, g, b) => {
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  return (
    <div className="container colors" style={divstyle}>
      <p>{color}</p>
      <p>{convertToHex(r, g, b)}</p>
    </div>
  );
}
