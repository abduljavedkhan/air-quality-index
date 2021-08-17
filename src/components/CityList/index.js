import React from "react";
import timeCalculation from "../../utils/timeCalculaton";
import Card from "../Card";

const CityList = ({ list, conStatus }) => {
  return (
    <div className="flex align-center justify-center flex-wrap my-4 py-4">
      {list.map((val, index) => (
        <Card
          key={index}
          city={val.city}
          aqi={Math.round(val.aqi * 100) / 100}
          updatedAt={timeCalculation(val.recievedAt)}
          status={conStatus}
        />
      ))}
    </div>
  );
};

export default CityList;
