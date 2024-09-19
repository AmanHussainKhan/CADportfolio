import React, { useState } from "react";

function BgChanger() {
  const [bgCol, setBgcol] = useState("white");
  const changeColor = (e) => {
    setBgcol(e.target.value);
  };
  return (
    <div>
      <div
        className="w-screen h-screen flex items-center flex-col md:flex-row justify-between"
        style={{ backgroundColor: bgCol }}
      >
        <div className="flex flex-col justify-center w-full h-5/6 md:h-full items-center">
          <h1 className="md:text-6xl text-[#295F98] z-40  text-2xl sm:text-5xl">
            {" "}
            Coding Alone Diaries
          </h1>
          <h1 className="text-md text-[#295F98] font-semibold z-40 mt-2">
            {" "}
            Background Changer
          </h1>
        </div>
        <div className="mt-5 flex-wrap md:flex flex-col grid md:grid-cols-4-4 gap-2 px-4">
          <button
            onClick={changeColor}
            value="#FFEBCC"
            className="bg-[#FFEBCC] border border-black hover:bg-[#FFE0B3] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Peach
          </button>

          <button
            value="#FFD1DC"
            onClick={changeColor}
            className="bg-[#FFD1DC] border border-black hover:bg-[#FFC4D4] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Pink
          </button>

          <button
            onClick={changeColor}
            value="#D3E4CD"
            className="bg-[#D3E4CD] border border-black hover:bg-[#C8DBBD] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Mint
          </button>

          <button
            onClick={changeColor}
            value="#FFF5BA"
            className="bg-[#FFF5BA] border border-black hover:bg-[#FFF0A5] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Yellow
          </button>

          <button
            value="#AFCBFF"
            onClick={changeColor}
            className="bg-[#AFCBFF] border border-black hover:bg-[#9FC2FF] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Blue
          </button>

          <button
            value="#C4A7E7"
            onClick={changeColor}
            className="bg-[#C4A7E7] border border-black hover:bg-[#B89BE2] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Lavender
          </button>

          <button
            value="#FFE6CC"
            onClick={changeColor}
            className="bg-[#FFE6CC] border border-black hover:bg-[#FFDAB3] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Apricot
          </button>

          <button
            value="#E5F4E3"
            onClick={changeColor}
            className="bg-[#E5F4E3] border border-black hover:bg-[#D9F0D7] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Green
          </button>

          <button
            value="#FFCCE5"
            onClick={changeColor}
            className="bg-[#FFCCE5] border border-black hover:bg-[#FFC0DC] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Rose
          </button>

          <button
            value="#F0E68C"
            onClick={changeColor}
            className="bg-[#F0E68C] border border-black hover:bg-[#E6DA85] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Khaki
          </button>

          <button
            value="#B4E1FF"
            onClick={changeColor}
            className="bg-[#B4E1FF] border border-black hover:bg-[#A8D9FF] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Baby Blue
          </button>

          <button
            value="#D1C2E4"
            onClick={changeColor}
            className="bg-[#D1C2E4] border border-black hover:bg-[#C5B5DB] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Purple
          </button>

          <button
            value="#FFD6A5"
            onClick={changeColor}
            className="bg-[#FFD6A5] border border-black hover:bg-[#FFCC8F] text-black font-bold py-2 px-4 rounded mx-2"
          >
            Pastel Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
