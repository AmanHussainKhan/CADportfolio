import React from "react";

function MainCanva({ setBrushOpacity, setBrushColor, setBrushWidth }) {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center py-5 pb-5">Draw anything you like:</h1>
      <div className="border-b pb-2">
        <label htmlFor="brush" className="p-3">
          Brush Color:
        </label>

        <input
          className="p-3"
          type="color"
          onChange={(e) => {
            setBrushColor(e.target.value);
          }}
        ></input>

        <label htmlFor="brush_width" className="p-3">
          Brush Width:
        </label>
        <input
          type="range"
          min="3"
          max="20"
          onChange={(e) => {
            setBrushWidth(e.target.value);
          }}
        />

        <label htmlFor="brush_opacity">Brush Opacity:</label>
        <input
          type="range"
          min="1"
          max="100"
          onChange={(e) => {
            setBrushOpacity(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default MainCanva;
