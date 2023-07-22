import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Component/Navbar";
import Bollywood from "./Component/pages/Bollywood"
import Technology  from "./Component/pages/Technology"
import Hollywood from "./Component/pages/Hollywood"
import {Home} from "./Component/pages/Home"
import Fitness from "./Component/pages/Fitness";
import Food from "./Component/pages/Food";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;