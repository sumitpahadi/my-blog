import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Contextapi from "./Contextapi/Contextapi";

import "./Navbar.css";

const Detaildesciption = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const bollywooddata = useContext(Contextapi);

  const imageData = bollywooddata.find((item) => item.id === parseInt(id));

  return (
    <div className="unique-image">
      <div className="child-of-des">
        <h1>{imageData.heading}</h1>
        <div className="header-for-img">
          <div className="mypic">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <div className="names">
            <h5>Sumit rawat</h5>
            <h5>4 August 2023</h5>
          </div>
          <div>
            <div className="logo">
              <span className="material-symbols-outlined">home</span>
              <span className="material-symbols-outlined">settings</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">grade</span>
            </div>
          </div>
        </div>

        <img src={imageData.Image} alt="click here" className="movieimg" />
        <div className="des">
          <p>{imageData.description}</p>
        </div>
        <div className="like">
          <span class="material-symbols-outlined">thumb_up</span>
          <p>Like</p>
        </div>
        <hr />

        <div className="header-for-img">
          <div className="mypic">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <div className="names">
            <h5>Written by</h5>
            <h5>Sumit rawat</h5>
            <h5>4 August 2023</h5>
          </div>
          
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Detaildesciption;
