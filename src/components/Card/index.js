import React, { useState, useRef, useMemo } from "react";
import img from "../../assets/images/g3.jpg";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { textColor } from "../../utils/constant";

const Card = ({ city, aqi, updatedAt, status }) => {
  const aqiData = useRef([]);
  const [showModal, setShowModal] = useState(false);
  aqiData.current = useMemo(() => [...aqiData.current, aqi], [aqi]);

  return (
    <>
      <div className="flex flex-col align-center justify-center flex-wrap m-2 py-3 h-24 w-72 shadow-md hover:shadow-xl rounded-lg border-2 border-blue-300 bg-white">
        <div className="flex h-16 w-full my-1 align-center justify-center item-center">
          <div className=" w-1/5 border-2 border-blue-300 rounded-lg cursor-pointer">
            <img
              src={img}
              className="rounded-xl object-cover hover:opacity-70 p-1 h-full w-full overflow-hidden"
              alt="graph"
              onClick={() => setShowModal(true)}
            />
          </div>
          <div className="flex flex-col w-3/5 h-16 justify-center align-center item-center mx-2 px-2 my-1 py-1 overflow-hidden">
            <div className="font-bold text-md">{city}</div>
            <div
              className={`text-md font-semibold ${textColor(aqi)}`}
            >{`${aqi}`}</div>
            <div className="text-gray-400 text-sm">{updatedAt}</div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-2 px-2">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-md font-semibold text-blue-500">
                    {city}
                  </h3>
                  <span
                    className={` font-semibold ${textColor(aqi)} text-md`}
                  >{`${aqi}`}</span>
                  <button
                    className="text-red-500 bg-white border-2 border-red-500 rounded-md font-bold uppercase px-2 py-1 m-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                <div className="flex justify-center m-15 p-10 w-96 h-44 align-center item-center">
                  <Sparklines data={aqiData.current} limit={70}>
                    <SparklinesLine
                      style={{ stroke: "#2991c8", fill: "none" }}
                    />
                    <SparklinesSpots />
                  </Sparklines>
                </div>
                <span className="text-sm text-gray-700 m-2">
                  Status :{" "}
                  <span className="text-green-600 mx-1">{`${status} `}</span>
                  Last Updated:
                  <span className="text-green-500 mx-1">{`${updatedAt}`} </span>
                </span>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Card;
