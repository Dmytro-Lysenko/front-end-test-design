import React, { useContext } from "react";
import { Context } from "../store/context";

import CartOverlayListItems from "../components/Cart/CartOverlayListItems";
import classes from "./CartOverlayModal.module.css";

const CartOverlayModal = (props) => {
  const ctx = useContext(Context);
  const itemsInCart = ctx.productsInCart.length;

  return (
    <>
      <div
        className={classes.backdrop}
        onMouseMove={() => props.onClose()}
      ></div>
      <div className={classes.CartContainer}>
        <h1 className={classes.myBag}>
          My bag, <span className={classes.items}>{itemsInCart} items</span>
        </h1>
        {itemsInCart === 0 ? (
          <h1 className={classes.noItems}>
            There are no items in cart, please add some!
          </h1>
        ) : (
          " "
        )}
        <CartOverlayListItems onClose={props.onClose} />
      </div>
    </>
  );
};

export default CartOverlayModal;
