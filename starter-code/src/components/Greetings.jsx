import React from "react";

export default function Greetings(props) {
  return (
    <div className="greeting container">
      {props.lang === "de" && <p>Hallo {props.children}</p>}
      {props.lang === "en" && <p>Hello {props.children}</p>}
      {props.lang === "fr" && <p>Bonjour {props.children}</p>}
      {props.lang === "es" && <p>Hola {props.children}</p>}
    </div>
  );
}
