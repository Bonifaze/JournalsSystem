import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side of the contact */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="secondaryText">
            We are always ready to help by Providing the best service
          </span>

          <div className="flexColStart contactModes">
            {/* first contacts row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondayText"> <a href="tel:+2348120212639">
0812 021 2639</a></span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+2348120212639" target="_blank">Call Now </a></div>
              </div>

              {/* second mode in the row  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span className="secondayText">0812 021 2639</span>
                  </div>
                </div>
                <div className="flexCenter button"> <a href="https://wa.me/08168438930" target="_blank"> Chat Now </a></div>
              </div>
            </div>

          {/* second contacts row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondayText">0812 021 2639</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now </div>
              </div>

              {/* second mode in the row  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondayText"><a href="mailto:clintonfaze@gmail.com" target="_blank">clintonfaze</a></span>
                  </div>
                </div>
                <div className="flexCenter button"> <a href="mailto:clintonfaze@gmail.com" target="_blank">Email us  Now </a></div>
              </div>
            </div>
          </div>
        </div>

        {/* left side of the contact section */}

        <div className="c-right">
          <div className="image-container">
            <img src="./f.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default contacts;
