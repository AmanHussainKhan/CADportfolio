import React from "react";

function BnsData({ result, searchItem }) {
  return (
    <div className="w-[100%]">
      {result && searchItem ? (
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="min-h-52 bg-blue-200 sm:span-col-1 p-3 rounded-lg">
            <h1 className="text-2xl font-semibold">IPC:{result.ipcSection}</h1>
            <h1 className="text-lg mt-3">{result.summary}</h1>
          </div>
          <div className="sm:span-col-1 bg-green-300 p-3 rounded-lg">
            <h1 className="text-2xl font-semibold">BNS:{result.bnsSection}</h1>
            <h1 className="text-lg mt-3">{result.subject}</h1>
          </div>
        </div>
      ) : (
        searchItem && (
          <p className="text-center text-xl font-bold">
            No matching IPC section found
          </p>
        )
      )}
    </div>
  );
}

export default BnsData;
