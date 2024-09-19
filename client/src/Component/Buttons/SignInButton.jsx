import React, { useState } from "react";

function SignInButton() {
  //   const [isSignedIn, setIsSignedIn] = useState(true);
  const [BtnText, setBtnText] = useState("help me code");

  //   const handleLoginButton = () => {
  //     if (isSignedIn) {
  //       setBtnText("Logout");
  //     }
  //   };
  return (
    <div>
      <button className="px-3 mx-3 py-1 rounded border border-black border-[2px] bg-yellow-200 hover:bg-yellow-400 font-semibold">
        {BtnText}
      </button>
    </div>
  );
}

export default SignInButton;
