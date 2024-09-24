import React, { useState } from "react";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import Accordian from "../25PROJECTS/Accordian";

function Practice() {
  const [toggle, setToggle] = useState(false);
  const [accordianToggle, setaccordianToggle] = useState(false);
  //   const [theme, setTheme] = useState("white");
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`w-screen p-5 h-screen ${toggle ? "bg-zinc-500" : "bg-white"}`}
    >
      <div className="flex gap-5">
        <h1 className="text-2xl">Toggle functionality:</h1>
        <button onClick={handleToggle} className="text-3xl">
          {toggle ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        {/* {toggle ? <p>toggle true</p> : <p>toggle false</p>} */}
      </div>
      <Accordian />
    </div>
  );
}

export default Practice;
