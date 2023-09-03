import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side of the footer  */}
        <div className="flexColStart f-left">
          <h1>ACA Journal</h1>
          {/* <img src="./logo2.png" alt="logo" width={120} /> */}
          <span className="sText">
            For 25 years, AJOL has been increasing <br /> global access to
            research published in African journals.
          </span>
        </div>
        {/* right side of the footer  */}
        <div className="flexColStart f-right">
          <span className="primaryText">More Information </span>
          <span className="sText">
            CC-BY-SA African Journals Online (AJOL), <br /> with the exception
            of 3rd party content <br />
          </span>
          <div className="flexCenter f-menu">
            <span>Home</span>
            <span>Journals</span>
            <span>How to Use</span>
            <span>About Us</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
