import React from "react";
import Home from "../main/Home";
import FlashDeals from "../flashDeals/FlashDeals";

const page = ({productItems, CartItem, addToCart}) => {
  return (
    <div>
      <Home CartItem = {CartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
    </div>
  );
};

export default page;
