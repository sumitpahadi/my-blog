import { createContext } from "react";
import DDLJimage from '../images/DDLJimage.jpg';
import RDJimage from '../images/RDJimage.jpg';
import RDJimage2 from '../images/Ironman.jpg';
import pathan from '../images/pathan.jpg'
import jawan from "../images/jawan.jpeg"
import OM from "../images/OM.webp"
import kgf from "../images/kgf.jpg"
import radheshyam from "../images/radheshyam.webp"
import ramsetu from "../images/ramsetu.jpg"
import rr from "../images/RR.jpg"
import tujhootimaimakar from "../images/tujhootimaimakar.jpg"
import Attack from "../images/attack.jpeg"
import bachanpandey from "../images/bachanpandey.jpg"



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
    Image: kgf,
    heading: "KGF",
    description: "KGF is an action-packed Indian movie set in the 1970s and early 1980s. It follows the story of Rocky, a fierce and ambitious man, who rises from the streets of Bombay to become a powerful don in the gold mines of Kolar Gold Fields (KGF) in Karnataka. The movie revolves around his quest for power, wealth, and revenge against those who wronged him and his mother. As Rocky takes on the oppressive mining mafia and becomes a symbol of hope for the downtrodden, he faces numerous challenges and adversaries. KGF is known for its intense action sequences, gripping storyline, and stellar performances, making it a blockbuster hit."


  },
  {
    id: 4,
    Image: OM,
    heading: "OM",
    description: "OM is a romantic Bollywood movie starring Aditya Roy Kapur in the lead role. The film revolves around the journey of two individuals, Om and Meera, who are destined to be together despite facing several challenges and obstacles. Om, a struggling artist, falls deeply in love with Meera, a successful career-oriented woman. Their love story takes unexpected turns as they navigate through the complexities of life, love, and relationships. The movie beautifully portrays the emotions of love, heartbreak, and redemption. Aditya Roy Kapur delivers a compelling performance, bringing depth and charm to his character. OM is a heartwarming tale that resonates with audiences for its touching narrative and captivating performances.",
  },
  {
    id: 5,
    Image: radheshyam,
    heading: "Radhe shyam",
    description: "Radhe Shyam is a romantic drama film set in the backdrop of Europe during the 1970s. The movie features Prabhas and Pooja Hegde in the lead roles. Prabhas plays the character of Vikramaditya, a young man who embarks on a soul-stirring journey of love and self-discovery. Pooja Hegde portrays the role of Prerna, a charming woman with a mysterious past. The film takes the audience on an enchanting ride filled with passion, love, and destiny as Vikramaditya and Prerna's paths cross, leading to an eternal bond that transcends time and space. Radhe Shyam is a visually captivating and emotionally engaging film that showcases the power of true love and the magic of destiny.",
  },
  {
    id: 6,
    Image:ramsetu ,
    heading: "Ram setu",
    description: "Ram Setu is an upcoming Bollywood film directed by Abhishek Sharma. The movie stars Akshay Kumar, Jacqueline Fernandez, and Nushrratt Bharuccha in prominent roles. The story revolves around the mythical Ram Setu bridge, a significant part of the Indian epic Ramayana. Akshay Kumar portrays an archaeologist who embarks on an expedition to uncover the truth behind the existence of Ram Setu. During the journey, they encounter various challenges and mystical elements, leading to a profound exploration of faith, history, and culture. The film promises to be a compelling blend of mythology, adventure, and contemporary storytelling, capturing the essence of India's rich cultural heritage and beliefs.",
  },
  {
    id: 7,
    Image:rr ,
    heading: "RRR",
    description: "RRR (Roudram Ranam Rudhiram) is an epic action-drama film directed by S.S. Rajamouli, featuring N. T. Rama Rao Jr., Ram Charan, Alia Bhatt, and Ajay Devgn. Set in the early 20th century, the film revolves around India's freedom fighters, Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad, respectively RRR promises a visual spectacle with breathtaking action sequences and grandeur. The narrative is driven by the powerful ideologies of the protagonists and their relentless pursuit of freedom and justice. With its stellar cast, top-notch production values, and Rajamouli's visionary direction, RRR is highly anticipated, making it one of the most awaited films in Indian cinema."

  },
  {
    id: 8,
    Image:tujhootimaimakar ,
    heading: "Toh jhoothi mai makkaar",
    description: "Toh Jhoothi Mai Makkaar is a comedy-drama film directed by a renowned filmmaker. The story revolves around the life of a quirky and charismatic protagonist who finds himself entangled in a series of hilarious and comical situations due to his habit of lying and deceiving others. The film takes the audience on a roller-coaster ride of laughter and entertainment as the protagonist's lies keep growing, leading to numerous misunderstandings and humorous encounters with various characters.",
  },
  {
    id: 9,
    Image: Attack ,
    heading: "Attack",
    description: "Attack is a high-octane action thriller set in the backdrop of a volatile political landscape. The film follows a group of skilled and courageous individuals, including an elite commando played by a leading actor, who embark on a daring mission to thwart a terrorist plot against the nation. As the adrenaline-pumping narrative unfolds, the audience is taken on a gripping journey filled with intense combat sequences, heart-pounding chase scenes, and unexpected twists. Amidst the pulse-pounding action, Attack also delves into the personal struggles and sacrifices of the protagonists, highlighting their unwavering dedication to protecting their country and its citizens. The film showcases the spirit of patriotism and the indomitable courage of the nation's defenders in the face of grave threats.",
  },
  {
    id: 10,
    Image:bachanpandey ,
    heading: "Bachan pandey",
    description: "Bachchan Pandey is a Bollywood action-comedy film featuring a popular superstar in the lead role. The story revolves around a rugged and eccentric character named Bachchan Pandey, who is known for his unique style and antics. Despite his carefree demeanor, Pandey finds himself entangled in a series of comical yet thrilling situations that lead him to unexpected adventures.Set against the backdrop of a small town, the film showcases Pandey's humorous encounters with the locals and his hilarious attempts to solve their problems. Along the way, he also confronts powerful adversaries and takes on various challenges with his trademark flair.",
  },
 

]);

export default Contextapi;
