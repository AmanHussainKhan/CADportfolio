import React from "react";

function HeroText() {
  return (
    <div>
      <h2 className="text-center text-[#3C3D37] text-xl font-semibold">
        <span>
          If you can <span style={{ color: "#408BBC" }}>console</span>
          <span style={{ color: "#C3CC89" }}>.log</span>
          <span style={{ color: "#F0DC4E" }}>(</span>
          <span style={{ color: "#B98E78" }}>"hello world!!"</span>
          <span style={{ color: "#F0DC4E" }}>)</span> then you can code too.
        </span>
      </h2>
    </div>
  );
}

export default HeroText;
