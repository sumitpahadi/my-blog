import React, { useContext } from "react";
import Contextapi from "../Contextapi/Contextapi";
import { Link } from "react-router-dom";
import "./Style.css";

export const Bollywood = () => {
  const bollywooddata = useContext(Contextapi);
  console.log(bollywooddata);

  return (
    <>
      <div className="bollywood-data">
        {bollywooddata
          .filter((item) => item.id > 0)
          .map((data, index) => {
            return (
              <div className="imagedata" key={index}>
                <div className="child">
                  <Link to={"/detaildescription/" + data.id}>
                    <img src={data.Image} alt="click here" />
                  </Link>

                  <div className="description">{data.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Bollywood;
