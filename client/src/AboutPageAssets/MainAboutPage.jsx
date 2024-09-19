import React from "react";
// import GitHubIcon from "@mui/icons-material"
// import LinkedInIcon from ""
import { about } from "./assetsData";
import Resume from "../Download Resume/Resume.pdf";
import "./About.css";

function MainAboutPage() {
  const { name, role, description, resume, social } = about;
  return (
    <div className="px-7">
      {name && (
        <h1 className="text-3xl md:text-5xl text-center mt-16 font-semibold">
          <span className="text-[#6A9C89] pr-2">I</span>
          <span className="text-[#FF885B] pr-2">am</span>
          <span className="text-[#F4CE14] pr-2">Aman</span>
          <span className="text-[#7695FF] pr-2">Hussain</span>
          <span className="text-[#987D9A]">Khan.</span>
        </h1>
      )}

      {role && (
        <h2 className="text-lg md:text-2xl text-center mt-7 font-semibold">
          <span className="text-[#1A5319] text-center font-bold text-3xl mt-11 text-[#405D72] py-2">
            Web Developer
          </span>
        </h2>
      )}
      <p className="text-justify text-lg text-slate-600 mt-5 font-semibold">
        {description && description}
      </p>

      <div className="text-center mt-9">
        {resume && (
          <a href={Resume} download="Resume">
            <span
              type="button"
              className="bg-green-200 text-lg px-6 border border-black py-3 rounded-3xl hover:bg-green-400"
            >
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                {/* <GitHubIcon /> */}
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                {/* <LinkedInIcon /> */}
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MainAboutPage;
