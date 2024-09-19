import React from "react";
import CADCenterLogo from "../Component/CADCenterLogo";
import LoginComponent from "../Component/LoginComponent";

function LoginRegisterPage() {
  return (
    <div className="w-screen h-screen bg-dark1 flex flex-col">
      <CADCenterLogo />
      <LoginComponent/>
    </div>
  );
}

export default LoginRegisterPage;
