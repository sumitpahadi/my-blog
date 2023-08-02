import React, { useContext } from "react";
import Contextapi from "../Contextapi/Contextapi";
import { Link } from "react-router-dom";

import "./Style.css";
function Technology() {
  const bollywooddata = useContext(Contextapi);
  console.log(bollywooddata);

  function truncateDescription(description, numWords) {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    const truncatedDescription = truncatedWords.join(" ");
    return truncatedDescription;
  }
  return (
    <>
      <>
        <div className="boll-heading">
          <h1>Bollywood</h1>
        </div>
        <div className="bollywood-data">
          {bollywooddata
            .filter((item) => item.id >=23 && item.id < 30)
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

        {/* --------------top stories------------------------ */}
        <div className="stories">Top stories</div>

        <div className="bollywood-first-container">
          <div className="bollywood-firstinner-container">
            <div className="bollywood-content">
              {bollywooddata
                .filter((item) => item.id >= 30 && item.id < 35)
                .map((data, index) => {
                  return (
                    <>
                      <div className="child" key={index}>
                        <Link to={"/detaildescription/" + data.id}>
                          <img src={data.Image} alt="click here" />
                        </Link>
                        <div className="title">{data.heading}</div>

                        <div className="description">
                          {truncateDescription(data.description, 15)}
                        </div>
                      </div>
                      <hr />
                    </>
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
                .filter((item) => item.id >= 35 && item.id <=39)
                .map((data, index) => {
                  return (
                    <>
                      <div className="child" key={index}>
                        <Link to={"/detaildescription/" + data.id}>
                          <img src={data.Image} alt="click here" />
                        </Link>
                        <div className="title">{data.heading}</div>

                        <div className="description">
                          {truncateDescription(data.description, 10)}
                        </div>
                        <div className="count">1</div>
                      </div>

                      <hr />
                    </>
                  );
                })}
              <div className="advertisement">
                <p>advertisement</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Technology;
