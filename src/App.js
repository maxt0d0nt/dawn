import "./App.css";
import Home from "./Pages/Home";
import Web from "./Pages/Web";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/web" element={<Web />}  />

    </Routes>
  );
}

export default App;
