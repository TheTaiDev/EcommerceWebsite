import React from "react";

const Cart = ({ CartItem, addToCart }) => {
  return (
    <div>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {CartItem.length === 0 && (
              <h1 className="no-items product">No items are add in Cart</h1>
            )}
            {CartItem.map((item) => {
                const productQty = item.price * item.productQty
                return(
                    <div className="cart-list product d_flex">
                        <img src={item.cover} alt="" />
                    </div>
                )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
