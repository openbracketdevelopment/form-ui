import React from "react";

const Divider = ({ customClasses }) => {
  return <div className={`block ${customClasses} h-[1px] bg-blue-100`}></div>;
};

export default Divider;
