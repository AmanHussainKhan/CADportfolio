import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import data from "../25PROJECTS/AccordianData";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div>
      {data && data.length > 0 ? (
        <div className="flex flex-col gap-3 max-w-[400px]">
          {data.map((item) => (
            <div key={item.id}>
              <div
                className="flex justify-between items-center bg-yellow-300 border border-black p-4"
                onClick={() => handleSingleSelection(item.id)}
              >
                {item.question}
                <span>
                  {selected === item.id && <FaMinus /> ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </span>
              </div>
              {selected === item.id && (
                <div className="p-2 bg-yellow-100 border-b border-black">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>No data found!</div>
      )}
    </div>
  );
}

export default Accordion;
