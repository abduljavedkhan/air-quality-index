import React from "react";
import { AIR_QUALITY_STANDARDS } from "../../../utils/constant";

const Header = () => {
  return (
    <header>
      <div className="p-2 bg-gray-200 shadow-md border-b-2 border-blue-300">
        <div className="flex item-center justify-center">
          <h1 className="font-bold text-sm md:text-3xl px-4 py-1 w-max text-blue-500">
            Air Quality Index
          </h1>
        </div>
      </div>
      <div className="flex align-center justify-center flex-wrap my-1">
        {AIR_QUALITY_STANDARDS.map((variant, index) => (
          <div
            key={index}
            className={`flex h-8 w-44 justify-center border m-1 p-1 text-sm font-bold text-blue-50 ${variant.bgColor}`}
          >
            {variant.category}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
