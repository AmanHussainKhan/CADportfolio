import React from "react";
import { FaArrowDown } from "react-icons/fa";
import "./GlowingResumeBtn.css";

function GlowingResumeBtn() {
  return (
    <div>
      {/* <button className="bg-red-500 flex text-xl cursor-pointer btn">
        Resume<span className="mt-2 mx-2 text-sm">{<FaArrowDown />}</span>
      </button> */}
      <button className="btn flex text-xl font-semibold">
        Resume<span className="mt-2 ml-3 text-lg">{<FaArrowDown />}</span>
      </button>
    </div>
  );
}

export default GlowingResumeBtn;
