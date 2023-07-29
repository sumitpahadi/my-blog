import React, { useContext } from "react";
import Contextapi from "../Contextapi/Contextapi";
import { Link } from "react-router-dom";

export const Bollywood = () => {
  const bollywooddata = useContext(Contextapi);
  console.log(bollywooddata);

  return (
    <>
      {bollywooddata
        .filter((item) => item.id > 0)
        .map((data, index) => {
          return (
            <div className="imagedata" key={index}>
              {/* Use data.id as the unique ID for each Link */}
              <Link to={"/detaildescription/" + data.id}>
                <div className="child">
                  <img src={data.Image} alt="click here" />
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Bollywood;
