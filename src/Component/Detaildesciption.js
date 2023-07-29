import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Contextapi from "./Contextapi/Contextapi";

const Detaildesciption = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const bollywooddata = useContext(Contextapi);

 
  const imageData = bollywooddata.find((item) => item.id === parseInt(id));

  
  return (
    <div>
      <h1>{imageData.heading}</h1>
      <img src={imageData.Image} alt="click here" />
      <p>{imageData.description}</p>
    </div>
  );
};

export default Detaildesciption;


