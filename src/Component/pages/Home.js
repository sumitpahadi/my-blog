import Contextapi from "../Contextapi/Contextapi";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
export const Home = () => {
  const bollywooddata = useContext(Contextapi);

  const Data = useContext(Contextapi);
  console.log(Data);

  function truncateDescription(description, numWords) {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    const truncatedDescription = truncatedWords.join(" ");
    return truncatedDescription;
  }

  return (
    <>
      <div className="top-container">
        <div className="first-container">
          <img src={Data[0].image1} alt="" />
        </div>

        <div className="second-container">
          <img src={Data[0].image2} alt="" />
        </div>
        <div className="third-container">
          <img src={Data[0].image3} alt="" />
        </div>
      </div>

      <div className="boll-heading">
        <h1>The Latest</h1>
      </div>
      <div className="bollywood-data">
        {bollywooddata
          .filter((item) => item.id >= 114 && item.id < 122)
          .map((data, index) => {
            return (
              <div className="imagedata" key={index}>
                <div className="child">
                  <Link to={"/detaildescription/" + data.id+"/"+data.catgory}>
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

      {/* --------------top stories------------------------ */}
      <div className="stories">Top stories</div>

      <div className="bollywood-first-container">
        <div className="bollywood-firstinner-container">
          <div className="bollywood-content">
            {bollywooddata
              .filter((item) => item.id >= 122 && item.id < 132)
              .map((data, index) => {
                return (
                  <div key={index}>
                    <div className="child" >
                      <Link to={"/detaildescription/" + data.id+"/"+data.catgory}>
                        <img src={data.Image} alt="click here" />
                      </Link>
                      <div className="title">{data.heading}</div>

                      <div className="description">
                        {truncateDescription(data.description, 15)}
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            <div className="load">
              {" "}
              <span className="material-symbols-outlined">
                keyboard_double_arrow_down
              </span>
              LOAD MORE{" "}
            </div>
          </div>
        </div>

        <div className="bollywood-secondinner-container">
          <div className="bollywood-inner-content">
            <div className="post">Top Post</div>
            {bollywooddata
              .filter((item) => item.id >= 132 && item.id <= 137)
              .map((data, index) => {
                const count = index + 1;
                return (
                  <div key={index}>
                    <div className="child" >
                      <Link to={"/detaildescription/" + data.id+"/"+data.catgory}>
                        <img src={data.Image} alt="click here" />
                      </Link>
                      <div className="title">{data.heading}</div>

                      <div className="description">
                        {truncateDescription(data.description, 8)}
                      </div>
                      <div className="count">{count}</div>
                    </div>

                    <hr />
                  </div>
                );
              })}
            <div className="advertisement">
              <p>advertisement</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
