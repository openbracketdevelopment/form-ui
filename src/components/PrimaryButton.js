import React from "react";

const PrimaryButton = ({ onClick, children }) => {
  return (
    <button
      className="bg-blue border-blue border-2 inline-block font-raleway-bold min-w-[240px] text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline mb-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
