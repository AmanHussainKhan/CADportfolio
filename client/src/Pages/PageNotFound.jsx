import React from "react";
import BasicButton from "../Component/Buttons/BasicButton";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="w-[100vw] h-[100vh] bg-dark1 flex items-center justify-center">
      <div className="flex gap-3 flex-col items-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h1 className="text-xl">page not found.</h1>
        <Link to="/" className="py-2" style={{ backgroundColor: "#7ed07e", color:"black", paddingLeft:"1rem", paddingRight:"1rem", borderRadius:"3PX", marginTop:"10px" }}>
          Go back to Home page.
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
