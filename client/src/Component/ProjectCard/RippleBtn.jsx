import React from "react";
import { Link } from "react-router-dom";

function RippleBtn() {
  return (
    <div>
      <div>
        <button className="px-7 py-1 rounded-2xl bg-yellow-300 hover:scale-105 border hover:bg-yellow-400 border-black text-lg font-semibold">
          Open
        </button>
      </div>
    </div>
  );
}

export default RippleBtn;
