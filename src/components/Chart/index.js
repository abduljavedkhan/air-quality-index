import React from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const Chart = ({aqiData}) => {
  return (
    <div className="flex justify-center m-15 p-10 w-96 h-44 align-center item-center">
      <Sparklines data={aqiData} limit={50}>
        <SparklinesLine style={{ stroke: "#2991c8", fill: "none" }} />
        <SparklinesSpots />
      </Sparklines>
    </div>
  );
};

export default Chart;
