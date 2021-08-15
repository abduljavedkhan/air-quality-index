import React from "react";

const Header = () => {
  return (
    <header>
      <div className="p-3 bg-gray-50">
        <div className="flex item-center justify-center">
          <h1 className="font-bold text-sm md:text-3xl px-4 py-1 w-max text-blue-500">
            Air Quality Index
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
