import React from "react";
import { Link } from "react-router-dom";

function Toplogo() {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-3xl font-bold text-center pt-3 pb-3 border-b border-black">
            <span className="hover:cursor-pointer text-[#373A40]">
              <Link to="/">Coding Alone Diaries</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Toplogo;
