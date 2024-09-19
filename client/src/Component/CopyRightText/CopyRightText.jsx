import React from "react";

function CopyRightText() {
  return (
    <div className="text-opacity-0 bg-yellow-100 border border-black">
      © {new Date().getFullYear()} Aman Hussain Khan. All Rights are Reserved.
    </div>
  );
}

export default CopyRightText;
