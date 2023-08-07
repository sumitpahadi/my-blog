import React, { useContext } from "react";
import Contextapi from "../Contextapi/Contextapi";
import { Link } from "react-router-dom";

import "./Style.css";

export const Food = () => {

  const bollywooddata = useContext(Contextapi);
 

  function truncateDescription(description, numWords) {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    const truncatedDescription = truncatedWords.join(" ");
    return truncatedDescription;
  }

  // ------------------------------------------usesate---------------------------

 

  return (
    <>
      <div className="boll-heading">
        <h1>FOOd</h1>
      </div>
      <div className="bollywood-data">
        {bollywooddata
          .filter((item) => item.id >=92 && item.id < 100)
          .map((data, index) => {
            return (
              <div className="imagedata" key={index} >
                <div className="child" >
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
              .filter((item) => item.id >= 100 && item.id <108)
              .map((data, index) => {
                return (
                  <>
                    <div className="child" key={index}>
                      <Link to={"/detaildescription/" + data.id+"/"+data.catgory}>
                        <img src={data.Image} alt="click here" />
                      </Link>
                      <div className="title">{data.heading}</div>

                      <div className="description">
                        {truncateDescription(data.description, 0)}
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
              .filter((item) => item.id >= 108 && item.id <=113)
              .map((data, index) => {
                const count = index + 1;
                return (
                  <>
                    <div className="child" key={index}>
                      <Link to={"/detaildescription/" + data.id+"/"+data.catgory}>
                        <img src={data.Image} alt="click here" />
                      </Link>
                      <div className="title">{data.heading}</div>

                      <div className="description">
                        {truncateDescription(data.description, 0)}
                      </div>
                      <div className="count">{count}</div>
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
  );
};

export default Food;
