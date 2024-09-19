import React from "react";
import Toplogo from "../Component/TOPLOGO/Toplogo";
import MainAboutPage from "../AboutPageAssets/MainAboutPage";
import Skills from "../Component/Skills/Skills";
import Footer from "../Component/Footer/Footer";

function AboutPage() {
  return (
    <div>
      <Toplogo />
      <MainAboutPage />
      <Skills />
      <Footer/>
    </div>
  );
}

export default AboutPage;
