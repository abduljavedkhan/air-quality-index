import React from "react";

const Header = () => {
  return (
    <header>
      <div className="p-2 bg-blue-400 shadow-md border-b-2 border-blue-300 h-20">
        <div className="flex item-center justify-center">
          <h1 className="font-bold text-md md:text-3xl px-4 py-1 w-max text-white">
            Air Quality Index
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
