import React from "react";
import Contextapi from "../Contextapi/Contextapi";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Style.css";

export const Home = () => {
  const Data = useContext(Contextapi);
  console.log(Data);

  const navigate = useNavigate(); // Get the navigate function from the hook

  // Function to handle navigation without refreshing the page

  return (
    <>
      <div className="top-container">
        <div className="first-container">
          <div className="image1">
            <img src={Data[0].image1} alt="" />
          </div>
        </div>

        <div className="second-conatiner">
          <div className="image2">
            <img src={Data[0].image2} alt=""/>
          </div>
          <div className="image3">
            <img src={Data[0].image3} alt="" />
          </div>
        </div>
      </div>

      <div className="div">
        <h1>The Latest</h1>
      </div>

      <div className="data-container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <div className="stories">Top stories</div>

      <div className="top-second-container">
        <div className="inner-container">
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
        </div>
        <div className="inner-second-container">
          <div className="inner-content"></div>
          <div className="inner-content"></div>
          <div className="inner-content"></div>
          <div className="inner-content"></div>
          <div className="inner-content"></div>
          <div className="inner-content1"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
