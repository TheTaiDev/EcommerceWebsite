import React from "react";
import Home from "../main/Home";
import FlashDeals from "../flashDeals/FlashDeals";

const page = ({productItems}) => {
  return (
    <div>
      <Home />
      <FlashDeals productItems={productItems} />
    </div>
  );
};

export default page;
