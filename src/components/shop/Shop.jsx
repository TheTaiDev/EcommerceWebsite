import React from "react";  
import Catg from "./Catg";
import "./style.css"
import ShopCart from "./ShopCart";
const Shop = ({shopItems, addToCart}) => {
  return (
    <div>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-feft row f_fex">
                {/* <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" /> */}
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right ">
                <span>View All</span>
                <i className="fa fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart addToCart={addToCart} shopItems = {shopItems} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
