import React from "react";
import CartList from "../components/Cart/CartList";

const Cart = (props) => {
  return (
    <div>
      <h1
        style={{
          fontFamily: "Raleway",
          fontWeight: "bold",
          fontSize: "32px",
          lineHeight: "40px",
          color: "#1D1F22",
          margin: "0 auto",
          padding: "80px 0 59px 0",
          maxWidth: "1100px",
          width: "100%",
        }}
      >
        CART
      </h1>
      <CartList />
    </div>
  );
};

export default Cart;
