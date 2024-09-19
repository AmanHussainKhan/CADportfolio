import React, { useEffect, useState } from "react";

function BasicButton({ addtoCartText }) {
  //   const [isSignedIn, setIsSignedIn] = useState(true);
  const [BtnText, setBtnText] = useState("Enter");

  useEffect(() => {
    setBtnText(addtoCartText);
  }, []);

  //   const handleLoginButton = () => {
  //     if (isSignedIn) {
  //       setBtnText("Logout");
  //     }
  //   };
  return (
    <div>
      <button
        style={{ backgroundColor: "#7ED07E", color: "black" }}
        className="px-3 mx-3 py-1 rounded hover:bg-red-100 font-semibold w-[100px]"
      >
        {BtnText}
      </button>
    </div>
  );
}

export default BasicButton;
