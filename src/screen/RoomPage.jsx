import React,{useEffect} from "react";
import { useSocket } from "../context/SocketProvider";

const RoomPage = () => {

  const socket = useSocket();

  return (
    <div>
      <h1>Room Page</h1>
    </div>
  );
};

export default RoomPage;
