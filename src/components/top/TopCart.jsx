import React from "react";
import Slider from "react-slick";
import Tdata from "./Tdata";
const TopCart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <div className="box product" key={index}>
              <div className="nametop d_flex">
                <span className="tleft">{value.para}</span>
                <span className="tright">{value.desc}</span>
              </div>
              <div className="img">
                <img src={value.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopCart;
