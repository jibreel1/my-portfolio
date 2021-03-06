import React from "react";
import Images from "../constants/images";

import { Fade } from "react-awesome-reveal";

const Aboutme = () => {
   return (
      <div className="section aboutme" id="about">
         <Fade duration="3000">
            <div className="aboutme_img">
               <img src={Images.hero2} alt="" />
            </div>
         </Fade>
         <Fade duration="3000">
            <div className="aboutme_content">
               <h1>About me...</h1>
               <p>
                  I'm Osunkoya Jibreel, a Frontend developer and a Freelancer.
               </p>
               {/* <p>
               I've always been fascinated about how things are built, coming
               together to form a single piece.
            </p>
            <p>
               I stumbled on a friend of mine who was building a website. I was
               intrigued about how it was done. He then showed me the basic
               <code> h1 tag</code> using notepad. Ever since, I never stopped
               wanting to know more.
            </p> */}
               <p>
                  As a freelance developer, I have created exciting websites for
                  people and businesses there by making them prosper.
               </p>
               <p>
                  I'm a well organized person and problem solver with high
                  attention to details. I'm also interested in working with
                  positive people on ambitious projects as it gives room for
                  learning and growth.
               </p>
               {/* <p>
               Away from the keyboard, I'm a fan of football and I love going to
               see movies.
            </p> */}
            </div>
         </Fade>
      </div>
   );
};

export default Aboutme;
