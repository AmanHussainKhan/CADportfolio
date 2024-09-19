import { React, useState } from "react";
import Square from "./Square";
import "./App.css";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setIsXturn(!isXturn);
  };
  console.log("state", state);

  const reset = () => {
    setState([]);
    // setState(Array(9).fill(null));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "80vh",
      }}
    >
      <div className="board-container boder-black ">
        <>
          {isWinner ? (
            <div className="flex flex-col h-[50%] items-center">
              <div className="text-4xl bg-blue-200 text-blue-500 font-bold px-5 py-1 rounded">
                {isWinner} WON THE GAME
              </div>
              <button
                className="bg-yellow-200 border border-black mt-10 inline w-[100px]"
                onClick={reset}
              >
                play again?
              </button>
            </div>
          ) : (
            <>
              <div className="board-row bg-yellow-300">
                <Square
                  onClick={() => {
                    handleClick(0);
                  }}
                  value={state[0]}
                />
                <Square
                  onClick={() => {
                    handleClick(1);
                  }}
                  value={state[1]}
                />
                <Square
                  onClick={() => {
                    handleClick(2);
                  }}
                  value={state[2]}
                />
              </div>
              <div className="board-row bg-yellow-300">
                <Square
                  onClick={() => {
                    handleClick(3);
                  }}
                  value={state[3]}
                />
                <Square
                  onClick={() => {
                    handleClick(4);
                  }}
                  value={state[4]}
                />
                <Square
                  onClick={() => {
                    handleClick(5);
                  }}
                  value={state[5]}
                />
              </div>
              <div className="board-row bg-yellow-300">
                <Square
                  onClick={() => {
                    handleClick(6);
                  }}
                  value={state[6]}
                />
                <Square
                  onClick={() => {
                    handleClick(7);
                  }}
                  value={state[7]}
                />
                <Square
                  onClick={() => {
                    handleClick(8);
                  }}
                  value={state[8]}
                />
              </div>
            </>
          )}
        </>
      </div>
      {!isWinner ? (
        <button
          className="bg-green-200 border rounded-2xl border-black mt-5 inline w-[50px]"
          onClick={reset}
        >
          reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Board;
