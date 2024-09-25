import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HelpMeCodersHome() {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/loginpage");
  };

  return (
    <div className="bg-[#4A4947] w-[100%] h-screen">
      <div>
        <div className=" border-b border-black flex justify-between items-center px-3">
          <div className="hover:cursor-pointer text-3xl font-bold pt-3 pb-3 text-[#F5F5F7]">
            Coding Alone Diaries
          </div>
          <div>
            {isUserSignedIn ? (
              <>
                <button
                  onClick={handleSignOut}
                  className="bg-red-400 px-3 py-1"
                >
                  sign out
                </button>
              </>
            ) : (
              <>user logged out</>
            )}
          </div>
        </div>
        <div><button className="bg-gray-300 px-3 py-1 rounded border shadow mt-2 ml-2">leave a message here</button></div>
      </div>
    </div>
  );
}

export default HelpMeCodersHome;
