import React from "react";
import classes from "./CartOverlayModal.module.css";

const CartOverlayModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={() => props.onClose()}></div>
      <div className={classes.CartContainer}></div>
    </>
  );
};

export default CartOverlayModal;
