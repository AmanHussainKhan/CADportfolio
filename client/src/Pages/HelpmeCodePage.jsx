import React from "react";
import Toplogo from "../Component/TOPLOGO/Toplogo";
import HelpmeCodeSignup from "../Component/HelpmeCodeSignup";

function HelpmeCodePage() {
  return (
    <div className="bg-[#D1E9F6] h-screen">
      <Toplogo />
      <div className="w-auto">
        <HelpmeCodeSignup />
        <h1 className="pl-20 pt-2">Don't have account</h1>
      </div>
    </div>
  );
}

export default HelpmeCodePage;
