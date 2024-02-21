import React from "react";
import PropTypes from "prop-types";
import { IoChevronDown } from "react-icons/io5"; // Import the down chevron arrow icon

const SelectDropdown = ({ label, options }) => {
  return (
    <div className="relative">
      <div className="flex items-center border border-blue-100 rounded-md overflow-hidden px-3">
        <label
          htmlFor="importName"
          className="block text-gray-700 min-w-[100px] sm:min-w-[200px]"
        >
          {label}
        </label>
        <div className="select-input w-full">
          <select
            id="importName"
            name="importName"
            className="relative py-2 pl-4 pr-10 appearance-none bg-transparent w-full focus:outline-none"
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
      </div>
    </div>
  );
};

SelectDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectDropdown;
