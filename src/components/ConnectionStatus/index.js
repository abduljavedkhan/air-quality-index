import React from "react";

const ConnectionStatus = ({ status }) => {
  return (
    <div className="flex text-black-100 justify-center font-bold text-md ">
      STATUS :{" "}
      <span className="text-md text-blue-600 uppercase mx-1">{status}</span>
    </div>
  );
};

export default ConnectionStatus;
