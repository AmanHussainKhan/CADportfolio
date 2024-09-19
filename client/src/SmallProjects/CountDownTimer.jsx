import React, { useEffect, useRef, useState } from "react";

function CountDownTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);
  const [isPause, setPause] = useState(false);
  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    // calling this function in jsx
    setTime(parseInt(e.target.value * 60));
  };
  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };
  const handleStart = () => {
    setActive(true);
    setPause(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
      setActive(false);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPause, time]);

  const handlePause = () => {
    setPause(!isPause);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setActive(false);
    setPause(false);
    setTime(0);
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="bg-green-100 px-10 py-16 flex justify-center items-center flex-col rounded-lg border-[2px]">
        <h1 className="text-2xl text-center font-semibold mb-4">Timer</h1>
        <h1 className="font-bold text-5xl text-center">{formatTime()}</h1>
        <input
          type="number"
          placeholder="set Timer in Minutes"
          onChange={handleChange}
          className="py-3 px-7 mt-4 align-center"
          ref={inputRef}
        />
        <div className="gap-3 flex mt-5">
          <button
            className="hover:bg-green-300 bg-green-400 py-2 px-5 disabled:bg-gray-300 disabled:cursor-not-allowed"
            onClick={handleStart}
            disabled={isActive && !isPause}
          >
            Start
          </button>
          <button
            className="hover:bg-red-300 bg-red-400 py-2 px-5 disabled:bg-gray-300 disabled:cursor-not-allowed"
            onClick={handlePause}
            disabled={!isActive}
          >
            {isPause ? "Resume" : "Pause"}
          </button>
          <button
            className="hover:bg-blue-300 bg-blue-400 py-2 px-5 disabled:bg-gray-300 disabled:cursor-not-allowed"
            onClick={handleReset}
            disabled={!isActive && !isPause && time === 0}
          >
            Reset
          </button>
        </div>
      </div>
      <p className="text-slate-500">created by Aman Hussain Khan</p>
    </div>
  );
}

export default CountDownTimer;
