import React from "react";
import NavBar from "../Component/Navbar/NavBar";
import CopyRightText from "../Component/CopyRightText/CopyRightText";
import HeroText from "../Component/HeroText/HeroText";
import BasicButton from "../Component/Buttons/BasicButton";
import Footer from "../Component/Footer/Footer";
import TestPage from "./TestPage";
import SignInButton from "../Component/Buttons/SignInButton";
import Resume from "../Download Resume/Resume.pdf";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-[100%] h-screen bg-[#D1E9F6]">
        <div>
          <NavBar />
        </div>
        {/* <div className="h-full w-full flex row-span-3 items-center justify-center">
          <h2 className="text-center text-[#CDC2A5] text-xl font-semibold bg-slate-600 px-4">
            <span>
              If you can <span style={{ color: "#408BBC" }}>console</span>
              <span style={{ color: "#C3CC89" }}>.log</span>
              <span style={{ color: "#F0DC4E" }}>(</span>
              <span style={{ color: "#B98E78" }}>"hello world!!"</span>
              <span style={{ color: "#F0DC4E" }}>)</span> then you can code too.
            </span>
          </h2>
        </div> */}
        <h1 className="text-2xl md:text-5xl text-center text-zinc-500 mt-20 px-2">
          Aman Hussain Khan : Web Developer
        </h1>
        <h1 className="text-2xl md:text-2xl text-center text-zinc-500 mt-6 px-2">
          Website to showcase my web-dev experties.
        </h1>
        <div className="pt-4 flex justify-center">
          <div>
            <a href={Resume} target="blank">
              <button className="px-3 mx-3 py-1 rounded border border-black border-[2px] bg-green-200 hover:bg-green-400 font-semibold">
                Resume
              </button>
            </a>
          </div>
          <div>
            <Link to="/joincommunity">
              <SignInButton />
            </Link>
          </div>
        </div>
        {/* <div className="w-full flex justify-center">
          <h1 className=" text-lg text-center text-zinc-500 max-w-[600px]">
            <span className="text-[#4379F2]">Coding Alone Diaries</span> is my
            upcoming project where I am building tools and Js library to help
            coders to{" "}
            <span className="text-[#4379F2]">
              simplify their learning process.
            </span>{" "}
          </h1>
        </div> */}
        {/* <TestPage /> */}
      </div>
      <div className="w-[100%]">
        <Footer />
      </div>
    </>
  );
}

export default Home;
