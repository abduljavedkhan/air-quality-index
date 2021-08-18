import React, { useMemo, useRef, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import CityList from "../components/CityList";
import ConnectionStatus from "../components/ConnectionStatus";
import concatData from "../utils/concatData";

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
      <div className="flex flex-col item-center justify-center my-0.5 ">
        <ConnectionStatus status={connectionStatus} />
        <CityList list={citiesData} conStatus={connectionStatus} />
      </div>
    </>
  );
};

export default React.memo(Home);
