import React, { useState } from "react";
import one from "./pics/1.png";
import second from "./pics/2.png";
import third from "./pics/3.png";
import four from "./pics/4.png";
import five from "./pics/5.png";
import zero from "./pics/zero.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function CarouselProject({ sendDataToParent }) {
  const pics = [
    {
      name: "zero",
      original: zero,
    },
    {
      name: "first",
      original: one,
    },
    {
      name: "second",
      original: second,
    },
    {
      name: "third",
      original: third,
    },
    {
      name: "four",
      original: four,
    },
    {
      name: "five",
      original: five,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [textDisplay, setTextDisplay] = useState(false);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % pics.length;
    setCurrentIndex(nextIndex);
  };

  const previousSlide = () => {
    const previousIndex = (currentIndex - 1 + pics.length) % pics.length;
    setCurrentIndex(previousIndex);
    if (currentIndex === 0) {
      setTextDisplay(true);
      sendDataToParent(textDisplay,currentIndex);
    }
    if (currentIndex === 1) {
      setTextDisplay(true);
      sendDataToParent(textDisplay);
    }
  };

  return (
    <div>
      <div className="p-2 border border-black w-full h-[500px] rounded-lg">
        <img
          src={pics[currentIndex].original}
          alt={pics[currentIndex].name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex w-full justify-center gap-7 mt-2 mb-5 mr-5">
        <button onClick={previousSlide} className="text-3xl">
          {<FaArrowCircleLeft />}
        </button>
        <button onClick={nextSlide} className="text-3xl">
          {<FaArrowCircleRight />}
        </button>
      </div>
    </div>
  );
}

export default CarouselProject;
