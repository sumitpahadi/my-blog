import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Contextapi from "./Contextapi/Contextapi";
import { Link } from "react-router-dom";
import logo from "../Component/images/Mask Group 16.png";

import "./Navbar.css";

export const Detaildesciption = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const bollywooddata = useContext(Contextapi);

  const imageData = bollywooddata.find((item) => item.id === parseInt(id));

  function truncateDescription(description, numWords) {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    const truncatedDescription = truncatedWords.join(" ");
    return truncatedDescription;
  }


  return (
    <>
      <div className="unique-image">
        <div className="like-share">
          <div className="like-heading">
            <span class="material-symbols-outlined">thumb_up</span>Like
          </div>
          <div className="share">
            <span class="material-symbols-outlined">share</span>Share
          </div>
        </div>
        <div className="child-of-des">
          <h1>{imageData.heading}</h1>
          <div className="header-for-img">
            <div className="mypic">
              <img src={logo} alt="" />
            </div>
            <div className="names">
              <h5>Sumit rawat</h5>
              <h5>4 August 2023</h5>
            </div>
            <div>
              <div className="logo">
                <i className="fa-brands fa-square-facebook fa-beat-fade fa-2xl"></i>
                <i
                  className="fa-brands fa-square-instagram insta fa-beat-fade fa-2xl"
                
                ></i>{" "}
                <i className="fa-brands fa-square-twitter fa-beat-fade fa-2xl"></i>
                <i className="fa-brands fa-youtube fa-beat-fade fa-2xl"></i>
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

          <div className="header-for-img1">
            <div className="mypic">
              <img src={logo} alt="" />
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

      <div className="siren-heading">
        <h1>More from The Siren</h1>
      </div>
      <hr />

      <div className="bollywood-data">
        {bollywooddata
          .filter((item) => item.id >= 138 && item.id <= 140)
          .map((data, index) => {
            return (
              <div className="imagedata" key={index}>
                <div className="child">
                  <Link to={"/detaildescription/" + data.id}>
                    <img src={data.Image} alt="click here" />
                  </Link>
                  <div className="title">{data.heading}</div>

                  <div className="description">
                    {truncateDescription(data.description, 50)}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Detaildesciption;
