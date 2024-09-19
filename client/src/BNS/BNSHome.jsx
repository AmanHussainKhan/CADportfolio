import React, { useState } from "react";
import BnsData from "./BnsData";

function BNSHome() {
  const correspondenceTable = [
    {
      id: 1,
      bnsSection: "1(1)",
      subject: "Short title, commencement and application",
      ipcSection: "1",
      summary:
        "This subject is covered by six subsections of Section 1 of BNS, corresponding to five separate sections of IPC, sans separate headings thereof. In IPC, the extent of code operation is also given, which is absent in BNS.",
    },
    {
      id: 2,
      bnsSection: "1(2)",
      subject: "Commencement",
      ipcSection: "New",
      summary:
        "By subsection 1(2) of the BNS, the power to appoint the date of commencement is delegated to the Central Government, which was absent in the IPC.",
    },
    {
      id: 3,
      bnsSection: "1(3)",
      subject: "Punishment of offences committed within India",
      ipcSection: "2",
      summary:
        "No change except 'Code' is replaced with 'Sanhita'. Wherever the word 'Code' is used in IPC, the word 'Sanhita' is used in BNS; therefore, this fact will not be specifically mentioned in this table hereinafter.",
    },
    {
      id: 4,
      bnsSection: "1(4)",
      subject:
        "Punishment of offences committed beyond, which by law may be tried within, India",
      ipcSection: "3",
      summary:
        "Section is included as a subsection in BNS sans heading. 'Indian laws' is replaced with 'law' and 'for the time being in force in India' is inserted.",
    },
    {
      id: 5,
      bnsSection: "1(5)",
      subject:
        "Short title, commencement and application - Extension of Code to extra-territorial offences",
      ipcSection: "4",
      summary:
        "Section is included as a subsection in BNS sans heading. In the illustration, 'Uganda' has been replaced with 'any place outside India.'",
    },
    {
      id: 6,
      bnsSection: "1(6)",
      subject:
        "Short title, commencement and application - 'Certain laws not to be affected by this Act'",
      ipcSection: "5",
      summary: "IPC section is included as a subsection in BNS sans heading.",
    },
    {
      id: 7,
      bnsSection: "2",
      subject: "Definitions",
      ipcSection: "",
      summary:
        "In the IPC, definitions are not consolidated in a single section; instead, they are given in independent sections from Section 8 to Section 52A in Chapter II, 'General Explanations'. These have been conveniently organised and consolidated in a single section, i.e., Section-2, in alphabetical order as sub-sections with Arabic numerals to facilitate easier reference.",
    },
    {
      id: 8,
      bnsSection: "2(1)",
      subject: "'act'",
      ipcSection: "33",
      summary:
        "In the IPC, Section 33 addressed both 'Act' and 'Omission' collectively. However, in the BNS they are separated.",
    },
  ];

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
            placeholder="type IPC here..."
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
