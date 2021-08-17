import React, { useState, useRef, useMemo } from "react";
import img from "../../assets/images/g3.jpg";
import Chart from "../Chart";
import { textColor } from "../../utils/constant";

const Card = ({ city, aqi, updatedAt, status }) => {
  const aqiData = useRef([]);
  const [showChart, setShowChart] = useState(false);
  aqiData.current = useMemo(() => [...aqiData.current, aqi], [aqi]);

  return (
    <>
      <div
        className="flex flex-col align-center justify-center flex-wrap m-2 py-3 h-24 w-72 shadow-md hover:shadow-xl rounded-lg border-2 border-blue-300 bg-white  cursor-pointer"
        onClick={() => setShowChart(true)}
      >
        <div className="flex h-16 w-full my-1 align-center justify-center item-center">
          <div className=" w-1/5 border-2 border-blue-300 rounded-lg">
            <img
              src={img}
              className="rounded-xl object-cover hover:opacity-70 p-1 h-full w-full overflow-hidden"
              alt="graph"
              onClick={() => setShowChart(true)}
            />
          </div>
          <div className="flex flex-col w-3/5 h-16 justify-center align-center item-center mx-2 px-2 my-1 py-1 overflow-hidden">
            <div className="font-bold text-md">{city}</div>
            <div
              className={`text-md font-semibold ${useMemo(
                () => textColor(aqi),
                [aqi]
              )}`}
            >{`${aqi}`}</div>
            <div className="text-gray-400 text-sm">{updatedAt}</div>
          </div>
        </div>
      </div>
      {showChart ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none mx-4 px-2">
            <div className="relative my-6 max-w-3xl w-full">
              <Chart
                onChartClick={() => setShowChart(false)}
                status={status}
                aqiData={aqiData.current}
                city={city}
                aqi={aqi}
                updatedAt={updatedAt}
              />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Card;
