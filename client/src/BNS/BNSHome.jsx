import React, { useState } from "react";
import BnsData from "./BnsData";
import correspondenceTable from "./data";

function BNSHome() {
  const [searchItem, setSearchItem] = useState("");
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const input = e.target.value.trim(); // Trim any extra spaces
    setSearchItem(input);

    const filteredData = correspondenceTable.find(
      (item) => item.ipcSection.toLowerCase() === input.toLowerCase()
    );

    setResult(filteredData || null);
  };

  return (
    <div>
      <div className="bg-[#F6EACB] w-screen h-screen p-12">
        <h1 className="text-center pt-2 text-2xl font-semibold">
          THE INDIAN PENAL CODE, 1860 (IPC) to THE BHARTATIYA NYAYA SANHITA,
          2023 (BNS) Conterter
        </h1>
        <div className="w-[100%] flex justify-center">
          <input
            type="text"
            placeholder="eg. 302,375,420"
            value={searchItem}
            onChange={handleInputChange}
            className="w-[40%] mt-5 pl-2 py-2 border border-[#c4ac6f] border-[2px] rounded"
          />
        </div>
        {searchItem === "" ? (
          <h1 className="text-8xl font-semibold mt-5 w-full h-[350px] text-[#e0ca91] flex flex-cols items-center justify-center">
            Coding Alone Diaries
          </h1>
        ) : result ? (
          <BnsData result={result} searchItem={searchItem} />
        ) : (
          <div className="text-2xl font-semibold text-center mt-10">
            No result found!
          </div>
        )}
      </div>
    </div>
  );
}

export default BNSHome;
