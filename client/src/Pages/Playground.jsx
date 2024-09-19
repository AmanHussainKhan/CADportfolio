import React, { useState, useEffect } from "react";

const FallingButtons = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const generateRandomPositions = () => {
      const newPositions = Array(4)
        .fill()
        .map(() => ({
          left: `${Math.floor(Math.random() * 70) + 10}%`, // Random position between 10% and 80%
        }));
      setPositions(newPositions);
    };

    generateRandomPositions();

    const interval = setInterval(() => {
      generateRandomPositions(); // Update positions every 3 seconds
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    alert(`Button ${index + 1} clicked!`);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#6A9C89",
        overflow: "hidden",
      }}
    >
      {positions.map((pos, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            position: "absolute",
            top: "-60px" /* Start above the screen */,
            // width: "60px",
            height: "60px",
            padding:"30px",
            color:"whitesmoke",
            borderRadius: "50%",
            // backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            left: pos.left,
            animation: "fall 4s linear infinite",
            animationDelay: `${
              Math.random() * 2
            }s` /* Each button starts at a random delay */,
          }}
        >
          Keep Coding
        </div>
      ))}
      <button className="bg-yellow-300 px-2 border">Enter</button>

      <style>{`
        @keyframes fall {
          0% {
            top: -60px; /* Start above the screen */
          }
          100% {
            top: 100vh; /* End just below the screen */
          }
        }
      `}</style>
    </div>
  );
};

export default FallingButtons;
