import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";


function Hero() {


  return (
    
    <section className="hero-wrapper">
            
      <div className="paddings innerWidth flexCenter hero-container ">
        
        {/* left side of the hero section  */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Academic Journals
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            {/* <h4> <strong className='orangeText'>Welcome to the ACA Journal!</strong> </h4> */}
            <p className="secondaryText">
              <strong>
                "Education is a journey, not just to school but also for life."
              </strong>
            </p>
            <span className="secondaryText">
              {" "}
              ACA Journal of Research is now an open access journal
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={200} end={1000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Journals</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={900} end={10000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Articles</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={2000} end={8000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Authors</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={100} end={600} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Editors/Reviewers</span>
            </div>
          </div>
        </div>

        {/* right side of the hero section  */}
        <div className="flexCenter hero-right">
          <motion.div 
            initial={{ x:"7rem", opacity:0 }} 
            animate={{ x:0, opacity:1 }} 
            transition={{ duration:2 ,
            type:"spring"}}
           className="image-container">
            <img src="./hero-image.jpeg" alt="" />
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;
