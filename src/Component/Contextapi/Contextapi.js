import { createContext } from "react";
import DDLJimage from '../images/DDLJimage.jpg';
import RDJimage from '../images/RDJimage.jpg';
import RDJimage2 from '../images/Ironman.jpg';
import pathan from '../images/pathan.jpg'
import jawan from "../images/jawan.jpeg"



const Contextapi = createContext([
  {
    id: 0,
    image1: DDLJimage,
    image2: RDJimage,
    image3: RDJimage2,
  },
  {
    id: 1,
    Image: pathan,
    heading: "Pathan",
    description: "Pathan is an action-packed Bollywood movie that revolves around the life of a skilled and enigmatic undercover agent, played by Shah Rukh Khan. The story follows his journey through dangerous missions, while facing internal conflicts and external threats from a formidable adversary, portrayed by John Abraham. The film delves into the world of espionage, with thrilling chase sequences, intense combat scenes, and a gripping storyline that keeps the audience on the edge of their seats. Alongside the action, Pathan also explores the protagonist's personal struggles and emotional depth, making it a riveting cinematic experience that captivates audiences with its blend of intrigue, action, and emotion.",
  },
  {
    id: 2,
    Image:jawan ,
    heading: "Jawan",
    description: "Jawan is an action-packed Indian film that revolves around the life of a young soldier named Gana. Gana is a dedicated and patriotic soldier who is committed to safeguarding his country. However, he faces a moral dilemma when he discovers corrupt officials involved in illegal arms deals. Fueled by a sense of justice, Gana decides to take matters into his own hands and fights against the corrupt system to expose the truth and protect his nation. The movie is a thrilling and emotional journey that highlights the sacrifices and challenges faced by soldiers in their line of duty."
  },
  {
    id: 3,
    Image:"https://drive.google.com/drive/folders/1vsYlFqKQbGSgcHzJdWzyUJu2pN9gpdow" ,
    heading: "KGF",
    description: "",
  },
  {
    id: 4,
    Image: "https://drive.google.com/drive/folders/1vsYlFqKQbGSgcHzJdWzyUJu2pN9gpdow",
    heading: "OM",
    description: "",
  },
  {
    id: 5,
    Image:"https://drive.google.com/drive/folders/1vsYlFqKQbGSgcHzJdWzyUJu2pN9gpdow" ,
    heading: "Radhe shyam",
    description: "",
  },
  {
    id: 6,
    Image: "https://drive.google.com/drive/folders/1vsYlFqKQbGSgcHzJdWzyUJu2pN9gpdow",
    heading: "Ram setu",
    description: "",
  },
  {
    id: 7,
    Image:"https://drive.google.com/drive/folders/1vsYlFqKQbGSgcHzJdWzyUJu2pN9gpdow" ,
    heading: "RRR",
    description: "",
  },
  {
    id: 8,
    Image:"https://drive.google.com/drive/folders/1vsYlFqKQbGSgcHzJdWzyUJu2pN9gpdow" ,
    heading: "Toh jhoothi mai makkaar",
    description: "",
  },
  {
    id: 9,
    Image: "https://drive.google.com/drive/folders/1vsYlFqKQbGSgcHzJdWzyUJu2pN9gpdow" ,
    heading: "Attack",
    description: "",
  },
  {
    id: 10,
    Image: "https://drive.google.com/drive/folders/1vsYlFqKQbGSgcHzJdWzyUJu2pN9gpdow",
    heading: "Bachan pandey",
    description: "",
  },
 

]);

export default Contextapi;
