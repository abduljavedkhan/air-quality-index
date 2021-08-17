import React, { useMemo, useRef, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import AqiStandard from "../../components/AqiStandard";
import Card from "../../components/Card";
import concatData from "../../utils/concatData";
import timeCalculation from "../../utils/timeCalculaton";

const Home = () => {
  const messageCityAqi = useRef([]);
  const [citiesData, setCitiesData] = useState([]);
  const wsUrl = process.env.REACT_APP_WEB_SOCKET_URL;

  const { readyState, lastJsonMessage } = useWebSocket(wsUrl, {
    shouldReconnect: () => true,
    reconnectAttempts: 15,
    reconnectInterval: 1000,
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Live",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Offline",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  messageCityAqi.current = useMemo(() => {
    setCitiesData((oldData) => concatData(oldData, lastJsonMessage));
  }, [lastJsonMessage]);

  return (
    <>
      <AqiStandard />
      <div className="flex flex-col item-center justify-center">
        <div className="flex text-black-100 justify-center font-bold text-md">
          STATUS :{" "}
          <span className="text-md text-blue-600 uppercase mx-1">
            {connectionStatus}
          </span>
        </div>
        <div className="flex align-center justify-center flex-wrap my-2 py-2">
          {citiesData.map((val, index) => (
            <Card
              key={index}
              city={val.city}
              aqi={Math.round(val.aqi * 100) / 100}
              updatedAt={timeCalculation(val.recievedAt)}
              status={connectionStatus}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
