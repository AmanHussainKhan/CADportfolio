import React from "react";

function Square(props) {
  return (
    <div
      className="square"
      onClick={props.onClick}
      style={{
        border: "1px solid",
        cursor: "pointer",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-4xl">{props.value}</h1>
    </div>
  );
}

export default Square;
