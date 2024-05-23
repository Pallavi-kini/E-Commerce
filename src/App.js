import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Women from "./Pages/Women";
import Shop from "./Pages/Shop";
import MenFile from "./Pages/MenFile";
import Kids from "./Pages/Kids";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="women" element={<Women />} />
        <Route path="men" element={<MenFile />} />
        <Route path="kids" element={<Kids />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
