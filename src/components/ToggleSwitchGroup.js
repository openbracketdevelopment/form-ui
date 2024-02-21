import React, { useState } from "react";

const ToggleSwitchGroup = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row mb-3">
        <div className="flex flex-row mb-3">
          <div
            className={`relative w-[50px] h-[25px] rounded-full mr-2 bg-${
              isOn ? "blue" : "white"
            } border-2 border-blue-400 cursor-pointer`}
            onClick={toggleSwitch}
          >
            <div
              className={`absolute left-0 top-0 bottom-0 m-auto w-[25px] h-[25px] rounded-full bg-white border border-2 border-blue-400 transform ${
                isOn ? "translate-x-full" : "translate-x-[-1px]"
              } transition-all duration-200 ease-in-out`}
            ></div>
          </div>
          <span
            className={`font-raleway-regular text-blue ${
              isOn ? "text-blue" : "text-blue"
            }`}
          >
            Toggle{" "}
            <span className="w-[30px] inline-block">{isOn ? "ON" : "OFF"}</span>
          </span>
          <span className="mx-3 font-raleway-light">|</span>
        </div>
        <div className="flex flex-row mb-3">
          <img
            src="/assets/images/clock-icon.svg"
            alt=""
            className="w-[20px] flex justify-self-center mb-3"
          />
          <span className="mx-2 font-raleway-light">
            Select Tolerance Level
          </span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitchGroup;
