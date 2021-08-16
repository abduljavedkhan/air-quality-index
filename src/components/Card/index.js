import React from "react";
import img from "../../assets/images/g3.jpg";
const Card = ({ city, aqi, updatedAt }) => {
  const openGraph = () => {};

  return (
    <div className="flex flex-col align-center justify-center flex-wrap  cursor-pointer  m-2 py-3 h-24 w-72 shadow-md hover:shadow-lg rounded-lg border-2 border-blue-200 bg-gray-50">
      <div className="flex h-16 w-full my-1 align-center justify-center item-center">
        <div
          className=" w-1/5 border-2 border-blue-500 rounded-lg"
          onClick={openGraph}
        >
          <img
            src={img}
            className="rounded-xl object-cover hover:opacity-70 p-1 h-full w-full overflow-hidden"
            alt="graph"
          />
        </div>
        <div className="flex flex-col w-3/5 h-16 justify-center align-center item-center mx-2 px-2 my-1 py-1 overflow-hidden">
          <span className="font-bold text-xl">{city}</span>
          <span className="text-sm">{`AQI-${aqi}`}</span>
          <span className="text-gray-400 text-sm">{updatedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
