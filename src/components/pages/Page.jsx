import React from "react";
import Home from "../main/Home";
import FlashDeals from "../flashDeals/FlashDeals";
import TopCate from "../top/TopCate";
const page = ({ productItems, CartItem, addToCart }) => {
  return (
    <div>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
    </div>
  );
};

export default page;
