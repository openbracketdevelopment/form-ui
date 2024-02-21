import React from "react";
import { IoChevronDown } from "react-icons/io5"; // Import the chevron down icon

const SelectWithLabel = ({ label, options, groupId }) => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-custom-column-dropdown justify-center items-center mb-4">
      <label className=" mr-2 font-raleway-regula mb-1 sm:mb-0">{label}</label>
      <div className="flex items-center justify-center gap-4">
        <div className="relative w-full sm:min-w-[140px]">
          <select
            id={`${groupId}-select`}
            className="py-2 px-4 font-raleway-regular appearance-none bg-transparent w-full focus:outline-none border-blue-100 border rounded-md overflow-hidden"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute bottom-0 top-0 right-0 m-auto flex items-center pr-3 pointer-events-none">
            <IoChevronDown className="text-gray-400" />
          </div>
        </div>
        <img
          src="/assets/images/clock-icon.svg"
          alt=""
          className="w-[20px] block"
        />
      </div>
    </div>
  );
};

export default SelectWithLabel;
