import React from "react";
import "./Journal.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { color } from "framer-motion";
import { sliderSettings } from "../../utils/common";
const Journal = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Popular Journals</span>
          <span className="primaryText">Categories</span>
        </div>
        Here are some of our most popular journal categories and their
        corresponding journals.
        <Swiper {...sliderSettings}>
          <SliderButtons />

          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className=" flexColStart r-card">
                <img src={card.image} alt="" />
                <span className="secondaryText r-total">
                  <span style={{ color: "orange" }}>Total: </span>
                  <span>{card.total}</span>
                </span>
                <span className="primaryText"> {card.name}</span>
                <span className="sText"> {card.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Journal;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
