import React from "react";

const SecondaryButton = ({ onClick, children }) => {
  return (
    <button
      className="border border-orange border-2 bg-transparent text-orange inline-block font-raleway-bold min-w-[240px] font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline mb-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
