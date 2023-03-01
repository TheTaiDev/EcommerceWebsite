import React from "react";
import Cart from "./Cart";
import "./style.css";
import newari from "../assets/images/arrivals/newarri.png";
const NewArrivals = () => {
  return (
    <div>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-feft row f_fex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>NewArrivals</h2>
            </div>
            <div className="heading-right ">
              <span>View All</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;
