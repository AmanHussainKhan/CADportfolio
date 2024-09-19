import React from "react";
import { Link } from "react-router-dom";
import SignInButton from "./Buttons/SignInButton";

function LoginComponent() {
  return (
    <div>
      <div className="flex flex-col w-1/4 gap-4 ">
        <input type="text" placeholder="Username" className="p-3" />
        <input type="text" placeholder="Password" className="p-3"/>
        <div>
          <span className="text-blue-700 text-sm underline">
            <Link to="/forgotpasswordpage">Forgot Password ?</Link>
          </span>
          <SignInButton/>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
