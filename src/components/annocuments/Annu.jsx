import React from "react";
import banner1 from "../assets/images/banner-1.png";
import banner2 from "../assets/images/banner-2.png";

const Annu = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  return (
    <div>
      <section className="annouc background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img src={banner1} height="100%" width="100%" alt="" />
          </div>
          <div className="img" style={mystyle}>
            <img src={banner2} height="100%" width="100%" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Annu;
