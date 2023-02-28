import React from "react";
import FlashCard from "./FlashCard";

const FlashDeals = ({productItems}) => {
  return (
    <div>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
          </div>
          <FlashCard productItems ={productItems} />
        </div>
      </section>
    </div>
  );
};

export default FlashDeals;
