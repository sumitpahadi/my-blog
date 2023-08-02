import Contextapi from "../Contextapi/Contextapi";
import React, { useContext } from "react";
import "./Style.css";
export const Home = () => {
  const Data = useContext(Contextapi);
  console.log(Data);

  return (
    <>
      <div className="top-container">
        <div className="first-container">
          <div className="image1">
            <img src={Data[0].image1} alt="" />
          </div>
        </div>

        <div className="second-container">
          <div className="image2">
            <img src={Data[0].image2} alt="" />
          </div>
          <div className="image3">
            <img src={Data[0].image3} alt="" />
          </div>
        </div>
      </div>

      <div className="div">
        <h1>The Latest</h1>
      </div>


    
       
   
     
    </>
  );
};

export default Home;