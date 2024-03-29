import Images from "./images";

const projects = [
   {
      id: 1,
      img: Images.readr,
      title: "READR",
      subtitle:
         "Readr is a social reading application for sharing your reading experience with friends family and co-workers. Allows you chat with your loved ones about the book you're reading. Enrich your reading experience and strengthen your relationships.",
      preview: "https://crowd-readr.netlify.app/",
      github: "https://github.com/jibreel1/readr",
      tech: "React, Javascript, Firebase, Material UI, SASS",
   },
   {
      id: 2,
      img: Images.nutrifeed,
      title: "Nutrifeed",
      subtitle:
         "An Ecommerce website that allows you order and buy various plants and flowers for your interior space. The API was created and consumed with Firebase which gave me total control of my app. I was provided with the design systems files by a UI/UX designer.",
      preview: "https://nutrifeed-app.netlify.app/",
      github: "https://github.com/jibreel1/Nutrifeed/",
      tech: "React, Javascript, Firebase, Material UI, SASS",
   },
   {
      id: 3,
      img: Images.project_1,
      title: "Space Tourism",
      subtitle:
         "A space launching website created to showcase the destinations, crews and techs used in space travel. It consists of 3 pages. The Figma design of the project was provided which was turned into a fully functional and responsive website using React JS.",
      preview: "https://space-travel-app.netlify.app/",
      github: "https://github.com/jibreel1/space-tourism-app",
      tech: "React, Javascript, SASS",
   },
   {
      id: 4,
      img: Images.project_2,
      title: "Gericht Restaurant",
      subtitle:
         "A Restaurant Website created to showcase their services rendered. The Figma design of the project was provided which was turned into a fully functional and responsive website using React JS. ",
      preview: "https://gericht-food-app.netlify.app/",
      github: "https://github.com/jibreel1/gerichtfoodapp",
      tech: "React, Javascript, CSS",
   },
];

const Data = { projects };

export default Data;
