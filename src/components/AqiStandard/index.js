import React from "react";
import { AQI_STANDARDS } from "../../utils/constant";

const AqiStandard = () => {
  return (
    <div className="flex align-center justify-center flex-wrap my-1 py-1">
      {AQI_STANDARDS.map((variant, index) => (
        <div
          key={index}
          className={`flex h-8 w-44 justify-center border m-1 p-1 text-sm font-bold text-blue-50 ${variant.bgColor}`}
        >
          {variant.category}
        </div>
      ))}
    </div>
  );
};

export default AqiStandard;
