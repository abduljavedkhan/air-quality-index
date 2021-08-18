import React from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { textColor } from "../../utils/constant";

const Chart = ({ aqiData, city, aqi, status, updatedAt, onChartClick }) => {
  return (
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <div className="flex items-center justify-between m-4 p-2">
        <div className="flex text-sm  sm:text-sm  text-gray-600 mx-2 px-2 justify-between font-bold flex-wrap">
          <div className=" mx-1 px-1">
            City :{" "}
            <span className="text-sm font-semibold text-blue-500">{`${city} `}</span>
          </div>
          <div className=" mx-1 px-1">
            AQI :{" "}
            <span className={`font-semibold ${textColor(aqi)} text-md`}>
              {`${aqi}`}
            </span>
          </div>
        </div>
        <button
          className="text-red-500 bg-white border-2 border-red-500 rounded-md font-bold uppercase px-2 py-1 m-1 ml-8 mr-4 pr-2 text-sm outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={onChartClick}
        >
          x
        </button>
      </div>
      <div className="flex justify-center m-5 p-10 w-auto h-60 align-center item-center  overflow-hidden">
        <Sparklines data={aqiData} limit={50} over>
          <SparklinesLine style={{ stroke: "#2991c8", fill: "none" }} />
          <SparklinesSpots  />
        </Sparklines>
      </div>
      <div className="flex text-sm  sm:text-sm  text-gray-700 mx-2 px-2 justify-between font-bold flex-wrap m-1 p-2">
        <div className=" mx-1 px-1">
          Status : <span className="text-green-600">{`${status} `}</span>
        </div>
        <div className=" mx-1 px-1">
          Last Updated :{" "}
          <span className="text-green-500">{`${updatedAt}`} </span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
