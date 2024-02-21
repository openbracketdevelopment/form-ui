import React, { useState, useEffect } from "react";

const RadioButtonGroup = ({ label, choices, defaultChoice, groupId }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    if (defaultChoice !== undefined && choices.includes(defaultChoice)) {
      const defaultIndex = choices.indexOf(defaultChoice);
      setSelectedChoice(defaultIndex);
    }
  }, [choices, defaultChoice]);

  const handleChoiceChange = (index) => {
    setSelectedChoice(index);
  };

  return (
    <div className="mb-4">
      <label className="block font-bold mb-2">{label}</label>
      <div className="flex">
        {choices.map((choice, index) => (
          <div key={index} className="flex items-center mr-4">
            <input
              type="radio"
              id={`${groupId}-choice-${index}`}
              name={`${groupId}-radioGroup`}
              className="hidden"
              checked={selectedChoice === index}
              onChange={() => handleChoiceChange(index)}
            />
            <label
              htmlFor={`${groupId}-choice-${index}`}
              className={`cursor-pointer inline-block w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                selectedChoice === index
                  ? "bg-blue-400 border-blue-400"
                  : "border-gray-400"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  selectedChoice === index ? "bg-blue" : "bg-white"
                }`}
              ></div>
            </label>
            <span className="font-raleway-regular">{choice}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
