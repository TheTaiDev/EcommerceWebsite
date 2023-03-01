import React from "react";
import Home from "../main/Home";
import FlashDeals from "../flashDeals/FlashDeals";
import TopCate from "../top/TopCate";
import NewArrivals from "../newarrivals/NewArrivals";
import Discount from "../Discount/Discount";
import Shop from "../shop/Shop";
import Annu from "../annocuments/Annu";
import Footer from "../Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";
const page = ({ productItems, CartItem, addToCart, shopItems }) => {
  return (
    <div>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annu />
      <Wrapper />
      <Footer />
    </div>
  );
};

export default page;
