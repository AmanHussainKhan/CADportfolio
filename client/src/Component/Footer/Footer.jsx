import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div className="h-32 bg-[#A28B55] grid md:grid-cols-2">
        <div className="flex items-center pl-7 px-5 md:text-lg sm:col-span-1">
          © {new Date().getFullYear()} Aman Hussain Khan. All Rights are
          Reserved.
        </div>
        <div className="flex items-center pl-7 gap-7 px-8 sm:col-span-1">
          <span className="text-3xl hover:cursor-pointer ease-in-out duration-500 hover:text-[#D1E9F6]">
            <a
              href="https://www.linkedin.com/in/amanhussainkhan/"
              target="blank"
            >
              {<FaLinkedin />}
            </a>
          </span>
          <span className="text-3xl hover:cursor-pointer ease-in-out duration-500 hover:text-[#D1E9F6]">
            <a href="https://github.com/AmanHussainKhan" target="blank">
              {<FaGithub />}
            </a>
          </span>
          <span className="text-3xl hover:cursor-pointer ease-in-out duration-500 hover:text-[#D1E9F6]">
            <a href="https://www.youtube.com/@AmnHussainKhan" target="blank">
              {<FaYoutube />}
            </a>
          </span>
          <span className="flex transition duration-500 hover:text-white">
            <Link to="/ttt">Playgame here</Link>
            <span className="text-xl">{<MdArrowOutward />}</span>
          </span>
          <span className="flex transition duration-500 hover:text-white">
            <Link to="/playground">My Playground</Link>
            <span className="text-xl">{<MdArrowOutward />}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
