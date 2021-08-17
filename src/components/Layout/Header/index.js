import React from "react";
import AqiStandard from "../../AqiStandard";

const Header = () => {
  return (
    <header>
      <div className="flex item-center justify-center p-4  bg-blue-400 shadow-md border-b-2 border-blue-300 h-20">
        <h1 className="font-bold text-xl md:text-3xl lg:3xl px-4 py-1 w-max text-white">
          Air Quality Index
        </h1>
      </div>
      <AqiStandard />
    </header>
  );
};

export default Header;
