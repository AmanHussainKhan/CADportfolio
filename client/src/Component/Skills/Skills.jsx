import React from "react";
import { useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import R from "./R.png";
import Js from "./Js.png";
import Css from "./Css.png";
import html from "./html.png";
import node from "./node.png";
import mongo from "./mongo.svg";
import ex from "./ex.png";
import tailwind from "./tailwind.png";
import dsa from "./dsa.png";
import TS from "./TS.png";
import reactNative from "./reactNative.png";
import CarouselProject from "../Carousel/CarouselProject";

function Skills() {
  const [parentState, setParentState] = useState("");

  const handleStateFromChild = (dataFromChild, neWala) => {
    setParentState(dataFromChild, neWala);
  };

  console.log("parentState", parentState);

  return (
    <div className="mb-10">
      <h1 className="text-center font-bold text-3xl mt-11 text-[#405D72] py-2">
        Technical Skills.
      </h1>
      <div className="grid sm:grid-cols-4 mt-10 px-4 gap-3">
        <div className="py-2 sm:py-none bg-blue-200 border border-black w-full flex justify-center items-center">
          <img src={html} style={{ height: "80px" }} />
        </div>
        <div className="bg-blue-200 border border-black w-full flex justify-center">
          <img src={Css} />
        </div>
        <div className="bg-blue-200 border border-black w-full flex justify-center">
          <img src={Js} />
        </div>
        <div className="border bg-blue-200 py-2 border-black text-4xl w-full flex justify-center">
          <img src={R} alt="react image" />
        </div>
        <div className="border bg-blue-200 py-2 border-black text-4xl w-full flex justify-center px-8">
          <img src={mongo} alt="react image" />
        </div>
        <div className="bg-blue-200 border border-black w-full">
          <div className=" w-full flex justify-center items-center py-3">
            <img src={node} style={{ height: "75px", width: "75px" }} />
          </div>
        </div>
        <div className="bg-blue-200 border border-black w-full">
          <div className=" w-full flex justify-center items-center py-3">
            <img src={ex} style={{ height: "75px", width: "75px" }} />
          </div>
        </div>
        <div className="bg-blue-200 border border-black w-full">
          <div className=" w-full flex justify-center mt-3 items-center py-3">
            <img src={tailwind} />
          </div>
        </div>
      </div>
      <h1 className="text-center font-bold text-3xl mt-11 text-[#405D72] py-2">
        Currently Learning.
      </h1>
      <div className="grid sm:grid-cols-4 mt-12 px-4 gap-3">
        <div className="bg-blue-200 border border-black w-full flex justify-center">
          <div className=" w-full flex justify-center items-center py-3">
            <img src={dsa} style={{ height: "120px", width: "120px" }} />
          </div>
        </div>
        <div className="border bg-blue-200 py-2 border-black text-4xl w-full flex justify-center">
          <div className=" w-full flex justify-center items-center py-3">
            <img
              src={reactNative}
              alt="react image"
              style={{ height: "120px", width: "170px" }}
            />
          </div>
        </div>
        <div className="border bg-blue-200 py-2 border-black text-4xl w-full flex justify-center">
          <div className=" w-full flex justify-center items-center py-3">
            <img
              src={TS}
              alt="react image"
              style={{ height: "90px", width: "170px" }}
            />
          </div>
        </div>
      </div>
      <h1 className="text-center font-bold text-3xl mt-11  text-[#405D72] py-2">
        Experience
      </h1>
      <div className="grid sm:grid-cols-2 mt-12 px-4 gap-3">
        <div>
          <CarouselProject sendDataToParent={handleStateFromChild} />
        </div>
        <div>
          <div>
            <h1 className="text-center text-2xl font-bold bg-[#115e98] rounded py-3 text-white">
              React JS Developer intern : Shyena Tech Yarn (Gen AI)
            </h1>
            <h3 className="text-justify text-xl pt-7 px-2 text-blue-700">
              <a href="https://inteliconvo.ai/">
                <span className="block font-semibold text-2xl mb-2 underline hover:text-pink-500">
                  Intelliconvo.ai
                </span>
              </a>{" "}
              Worked on building analytical graphs and pie charts using modern
              frontend technologies. Collaborated closely with the development
              team to implement features that enhance the platform's AI-powered
              voice automation solutions. Demonstrated strong problem-solving
              skills and attention to detail in delivering user-friendly,
              data-driven visualizations that improved customer insights and
              business performance.
            </h3>
            <h3 className="text-justify font-semibold text-xl pt-7 px-2 text-slate-500">
              On the left side are all the React components that I build in
              Shyena Tech yarn. I have use various React Library like Material
              UI, React Suite,ShadCN,React Charts.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
