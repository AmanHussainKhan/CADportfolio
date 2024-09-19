import React from "react";
import Toplogo from "../Component/TOPLOGO/Toplogo";
import ProjectCard from "../Component/ProjectCard/ProjectCard";
import RippleBtn from "../Component/ProjectCard/RippleBtn";
import Footer from "../Component/Footer/Footer";

function ProjectPage() {
  return (
    <>
      <div className="bg-[#F6EACB]">
        <Toplogo />
        <ProjectCard />
        <Footer />
      </div>
    </>
  );
}

export default ProjectPage;
