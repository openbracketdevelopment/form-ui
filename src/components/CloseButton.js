import React from "react";

const CloseButton = ({ onClick }) => {
  return (
    <button
      className="flex relative justify-center items-center close-button bg-blue p-2 w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] rounded-lg mb-3 sm:mb-1"
      onClick={onClick}
    >
      <div className="absolute w-[2px] h-[18px] sm:h-[25px] bg-white origin-center rotate-45"></div>
      <div className="absolute w-[2px] h-[18px] sm:h-[25px] bg-white origin-center -rotate-45"></div>
    </button>
  );
};

export default CloseButton;
