import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";

function Lobby() {
  const [formData, setFormData] = useState({ email: "", room: "" });
  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", {
        email: formData.email,
        room: formData.room,
      });
    },
    [formData, socket]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket]);

  const handleJoinRoom = useCallback((data) => {
    const { email, room } = data;
    navigate(`/room/${room}`);
  }, []);

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email ID</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <label htmlFor="room">Room Number</label>
        <input
          required
          type="text"
          id="room"
          name="room"
          value={formData.room}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <button type="submit">Join</button>
      </form>
    </div>
  );
}

export default Lobby;
