import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SortedBy = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [sortedByValue, setSortedByValue] = useState("Recommended");

  const handleClickedSortedBy = (sortingType) => {
    setSortedByValue(sortingType);
    setIsClicked(false);
  };

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold text-white mb-3">{props.field} </h1>

        <div className="w-[250px] relative z-50">
          <div
            onClick={() => setIsClicked(!isClicked)}
            className="bg-gray-100 border border-gray-400 rounded-md h-[37px] flex justify-center gap-4 items-center cursor-pointer select-none"
            style={{ zIndex: props.zIndex || 10 }}
          >
            <p className="text-[#414E5F] font-semibold">{sortedByValue}</p>
            <IoIosArrowDown className="text-[#414E5F] text-2xl" />
          </div>

          <div
            className={`${isClicked ? "h-[200px] border border-gray-400" : "h-0"} bg-gray-200 rounded-md shadow-lg absolute w-full top-10 transition-all ease-in-out duration-300 overflow-hidden`}
            style={{ zIndex: props.zIndex || 10 }}
          >
            <div className="p-5 text-center flex flex-col gap-5">
              {props.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleClickedSortedBy(option)}
                  className={`${sortedByValue === option ? "bg-green-200" : "bg-white"} p-2 rounded-md cursor-pointer`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortedBy;
