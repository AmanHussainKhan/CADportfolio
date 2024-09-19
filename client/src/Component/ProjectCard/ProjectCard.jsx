import React from "react";
import RippleBtn from "./RippleBtn";
import { Link } from "react-router-dom";

function ProjectCard() {
  return (
    <div>
      <div className="bg-[#D1E9F6] w-[100%] h-[100%]">
        <div className="text-3xl font-bold pl-10 pt-4 text-[#89a4b2]">
          Minor Projects.
        </div>

        <div className="p-7 grid md:grid-cols-4 gap-7 pt-10">
          <div className="rounded w-80 h-40 bg-red-200 border border-black flex flex-col justify-between">
            <div className="px-3 span-col-2">
              <p className="text-center pt-3 text-xl font-semibold">
                Weather Application
              </p>
              <p className="text-sm pt-3 text-zinc-900">
                Integrated API from OpneWeatherMap API and mapped the desired
                data in React component
              </p>
            </div>
            <div className="text-center mb-3">
              <Link to="/weatherapp">{<RippleBtn />}</Link>
            </div>
          </div>
          <div className="rounded w-80 h-40 bg-red-200 border border-black flex flex-col justify-between">
            <div className="px-3 span-col-2">
              <p className="text-center pt-3 text-xl font-semibold">
                Countdown Timer
              </p>
              <p className="text-sm pt-3 text-zinc-900">
                Integrated API from OpneWeatherMap API and mapped the desired
                data in React component
              </p>
            </div>
            <div className="text-center mb-3">
              <Link to="/countdowntimer">{<RippleBtn />}</Link>
            </div>
          </div>
          <div className="rounded w-80 h-40 bg-red-200 border border-black flex flex-col justify-between">
            <div className="px-3 span-col-2">
              <p className="text-center pt-3 text-xl font-semibold">
                Paint and Draw
              </p>
              <p className="text-sm pt-3 text-zinc-900">
                Integrated API from OpneWeatherMap API and mapped the desired
                data in React component
              </p>
            </div>
            <div className="text-center mb-3">
              <Link to="/paint">{<RippleBtn />}</Link>
            </div>
          </div>
          <div className="rounded w-80 h-40 bg-red-200 border border-black flex flex-col justify-between">
            <div className="px-3 span-col-2">
              <p className="text-center pt-3 text-xl font-semibold">
                Game: Tic Tac Toe
              </p>
              <p className="text-sm pt-3 text-zinc-900">
                Integrated API from OpneWeatherMap API and mapped the desired
                data in React component
              </p>
            </div>
            <div className="text-center mb-3">
              <Link to="/ttt">{<RippleBtn />}</Link>
            </div>
          </div>
          <div className="rounded w-80 h-40 bg-red-200 border border-black flex flex-col justify-between">
            <div className="px-3 span-col-2">
              <p className="text-center pt-3 text-xl font-semibold">
                Password Generator
              </p>
              <p className="text-sm pt-3 text-zinc-900">
                Integrated API from OpneWeatherMap API and mapped the desired
                data in React component
              </p>
            </div>
            <div className="text-center mb-3">
              <Link to="/weatherapp">{<RippleBtn />}</Link>
            </div>
          </div>
          <div className="rounded w-80 h-40 bg-red-200 border border-black flex flex-col justify-between">
            <div className="px-3">
              <p className="text-center pt-3 text-xl font-semibold">
                Background Changer
              </p>
              <p className="text-sm pt-3 text-zinc-900">
                Created a very simple but important project to understand the
                concept of useState.
              </p>
            </div>
            <div className="text-center mb-3">
              <Link to="/bgchanger">{<RippleBtn />}</Link>
            </div>
          </div>
        </div>

        {/* // ***************** */}

        <div className="text-3xl font-bold pl-10 text-[#89a4b2]">
          Major Projects.
        </div>
        <div className="p-7 grid md:grid-cols-4 gap-7 pt-10">
          <div className="rounded w-80 h-40 bg-red-200 border border-black flex flex-col justify-between">
            <div className="px-3 span-col-2">
              <p className="text-center pt-3 text-xl font-semibold">
                MERN Daily Todo App
              </p>
              <p className="text-sm pt-3 text-zinc-900">
                Beautiful looking minimalistic todo app using MERN.
              </p>
            </div>
            <div className="text-center mb-3">
              <Link to="/majorTodo">{<RippleBtn />}</Link>
            </div>
          </div>
          <div className="rounded w-80 h-40 bg-red-200 border border-black flex flex-col justify-between">
            <div className="px-3 span-col-2">
              <p
                className="text-center pt-3 text-xl font-semibold 
"
              >
                Redux Toolkit Project
              </p>
              <p className="text-sm pt-3 text-zinc-900">
                Implemented redux functionality for state management and passing
                values.
              </p>
            </div>
            <div className="text-center mb-3">
              <Link to="/reduxCart">{<RippleBtn />}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
