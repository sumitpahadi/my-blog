import React from "react";
import Contextapi from "../Contextapi/Contextapi";
import { useContext } from "react";
import "./Style.css";

export const Home = () => {
  const Data = useContext(Contextapi);
  console.log(Data);
  return (
    <>
      <div className="top-container">
        <div className="first-container">
          <img src={Data[0].image1} alt="" className="image1" />
        </div>

        <div className="second-conatiner">
          <img src={Data[0].image2} alt="" className="image2" />

          <img src={Data[0].image3} alt="" className="image3" />
        </div>
      </div>
    </>
  );
};

export default Home;
