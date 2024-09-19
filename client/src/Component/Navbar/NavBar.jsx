import React from "react";
import { Link, Navigate } from "react-router-dom";
import SignInButton from "../Buttons/SignInButton";
import Resume from "../../Download Resume/Resume.pdf";
import { useNavigate } from "react-router-dom";
import Ham from "../Navbar/hamburger/Ham";

function NavBar() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleAlert = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    const confirm = window.confirm(
      "The Store page is currently under development. Do you still want to proceed?"
    );
    if (confirm) {
      navigate("/store");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="h-16 flex justify-between items-center border-b border-black bg-[#F6EACB]">
      <div>
        <p className="pl-4 pb-2 text-3xl text-[#373A40] font-semibold cursor-pointer whitespace-nowrap font-bold sm:text-3xl">
          <span className="text-[]">Coding</span> <span>Alone</span>{" "}
          <span>Diaries</span>
        </p>
      </div>
      <div className="flex gap-10 pb-2 pr-5 hidden sm:flex justify-between mt-2">
        <div className="flex gap-10 font-semibold text-slate-600">
          <div className="hover:underline hover:text-blue-700">
            <Link to="/store" onClick={handleAlert}>
              Store
            </Link>
          </div>
          <div className="hover:underline hover:text-blue-700">
            <Link to="/bns">BNS</Link>
          </div>
          <div className="hover:underline hover:text-blue-700">
            <Link to="/project">Project</Link>
          </div>
          <div className="hover:underline hover:text-blue-700">
            <Link to="/about">About</Link>
          </div>
          <div className="hover:underline hover:text-blue-700">
            <Link to="/feedback">Feedback</Link>
          </div>
        </div>
        {/* <div className="pb-2 flex">
            <a href={Resume} target="blank">
              <button className="px-3 mx-3 py-1 rounded border border-black border-[2px] bg-green-200 font-semibold">
                Resume
              </button>
            </a>

            <Link to="/joincommunity">
              <SignInButton />
            </Link>
          </div> */}
      </div>
      <div className="sm:hidden pr-2">{<Ham />}</div>
    </div>
  );
}

export default NavBar;
