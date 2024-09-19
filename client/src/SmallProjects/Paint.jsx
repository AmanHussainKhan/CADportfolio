import MainCanva from "./MainCanva";
import { useEffect, useRef, useState } from "react";

function Paint() {
  const [brushColor, setBrushColor] = useState("blue"); // Brush color state
  const [brushWidth, setBrushWidth] = useState(8); // Brush width state
  const [brushOpacity, setBrushOpacity] = useState(0.5); // Brush opacity state
  const canvasRef = useRef(null); // Reference to the canvas DOM element
  const ctxRef = useRef(null); // Reference to the canvas drawing context
  const [isDraw, setIsDraw] = useState(false); // State to track if drawing is active

  useEffect(() => {
    const canvas = canvasRef.current; // Get the canvas element from the ref
    const contextRef = canvas.getContext("2d"); // Get the 2D drawing context

    canvas.width = 1200; // Set canvas width
    canvas.height = 500; // Set canvas height

    contextRef.lineCap = "round"; // Round end of lines
    contextRef.lineJoin = "round"; // Round corners of lines
    contextRef.strokeStyle = brushColor; // Set initial brush color
    contextRef.lineWidth = brushWidth; // Set initial brush width

    ctxRef.current = contextRef; // Save the context to the ref for later use
  }, [brushColor, brushWidth]); // Update whenever brush color or width changes

  const startDraw = (e) => {
    ctxRef.current.globalAlpha = brushOpacity; // Set the current opacity when drawing starts
    ctxRef.current.beginPath(); // Begin a new path
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); // Move to the mouse position
    setIsDraw(true); // Set drawing state to true
  };

  const draw = (e) => {
    if (!isDraw) return; // If not drawing, exit early
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); // Draw a line to the mouse position
    ctxRef.current.stroke(); // Stroke the path with the current settings
  };

  const endDrawing = () => {
    ctxRef.current.closePath(); // Close the current path
    setIsDraw(false); // Set drawing state to false
  };

  return (
    <>
      <div className="m-10 rounded-xl border border-black">
        <MainCanva
          setBrushColor={setBrushColor} // Pass function to update brush color
          setBrushWidth={setBrushWidth} // Pass function to update brush width
          setBrushOpacity={setBrushOpacity} // Pass function to update brush opacity
        />
        <canvas
          ref={canvasRef} // Attach the canvas ref
          onMouseDown={startDraw} // Start drawing on mouse down
          onMouseUp={endDrawing} // Stop drawing on mouse up
          onMouseMove={draw} // Draw on mouse move
          style={{ width: "1200px", height: "500px" }} // Set visual size via CSS
        />
      </div>
    </>
  );
}

export default Paint; // Export the App component
