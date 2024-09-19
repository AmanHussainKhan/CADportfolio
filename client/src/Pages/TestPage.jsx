import React, { useState } from "react";

const SpotlightReveal = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse position within the container
  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setMousePos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <>
      <div
        className="w-[100%] flex row-span-3 mt-32 items-center justify-center bg-[#D1E9F6]"
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          // backgroundColor: "#111",
          textAlign: "center",
          overflow: "hidden",
          fontSize: "24px",
          padding: "20px",
        }}
      >
        {/* Default text always visible */}
        <div style={{ position: "relative", zIndex: 1 }} className="pt-7"></div>

        {/* Hidden text revealed by the spotlight */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "500px",
            // backgroundColor: "#111",
            // Different color to distinguish hidden text
            clipPath: `circle(45px at ${mousePos.x}px ${mousePos.y}px)`,
            pointerEvents: "none", // Allows mouse events to pass through
            zIndex: 2,
          }}
        >
          <h2 className="text-center text-xl font-semibold bg-slate-700 py-10">
            <span>
              If you can <span style={{ color: "#408BBC" }}>console</span>
              <span style={{ color: "#C3CC89" }}>.log</span>
              <span style={{ color: "#F0DC4E" }}>(</span>
              <span style={{ color: "#B98E78" }}>"hello world!!"</span>
              <span style={{ color: "#F0DC4E" }}>)</span> then you can code too.
            </span>
          </h2>
        </div>
      </div>
      <p className="text-center">
        <marquee className="w-[25%] text-lg text-red-500">
          <span>Open to Work!!</span>
        </marquee>
      </p>
    </>
  );
};

export default SpotlightReveal;
