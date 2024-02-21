import React from "react";

const CheckLabel = ({ labelText, greenText }) => {
  return (
    <div className="mb-3">
      <label className="label-heading mb-1 block max-w-[320px] pt-4">
        {labelText}
      </label>
      <p className="text-green">{greenText}</p>
    </div>
  );
};

export default CheckLabel;
