import React, { useMemo, useRef, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import concatData from "../../utils/concatData";

const formatAqi = (aqiVal) => Math.round(aqiVal * 100) / 100;
const wsUrl = process.env.REACT_APP_WEB_SOCKET_URL;

const Home = () => {
  const messageCityAqi = useRef([]);
  const [data, setData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);

  const { readyState, lastJsonMessage } = useWebSocket(wsUrl, {
    onOpen: () => console.log("connection established"),
    onError: (error) => console.log("Error " + error),
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
    setData((currentData) => [...currentData, lastJsonMessage]);
  }, [lastJsonMessage]);

  return (
    <div>
      <div className="d-flex mb-10px p-10px justify-center text-bold text-1-2-5em">
        Server Status: {connectionStatus}
      </div>
      {citiesData.map((val, index) => (
        <div
          key={index}
          className="cursor-pointer transition-all w-100-small"
          aria-hidden
        >
          {`City ${val.city} - AQI ${formatAqi(val.aqi)}`}
        </div>
      ))}
    </div>
  );
};

export default Home;
