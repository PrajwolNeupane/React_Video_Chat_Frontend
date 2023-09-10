import { Routes, Route } from "react-router-dom";
import "./App.css";
import Lobby from "./screen/Lobby";
import RoomPage from "./screen/RoomPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
