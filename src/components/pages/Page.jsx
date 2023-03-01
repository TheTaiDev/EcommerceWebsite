import React from "react";
import Home from "../main/Home";
import FlashDeals from "../flashDeals/FlashDeals";
import TopCate from "../top/TopCate";
import NewArrivals from "../newarrivals/NewArrivals";
import Discount from "../Discount/Discount";
const page = ({ productItems, CartItem, addToCart }) => {
  return (
    <div>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
    </div>
  );
};

export default page;
