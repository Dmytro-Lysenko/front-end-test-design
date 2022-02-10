import React from "react";
import classes from "./DeleteProductFromCartModal.module.css";

const DeleteProductFromCartModal = (props) => {
  const toggleBackHandler = () => {
    props.onClose();
  };

  const deleteProductHandler = () => {
    props.onDelete();
  };
  return (
    <div className={classes.modal}>
      <div className={classes.content} >
        <h1>{props.children}</h1>
        <div className={classes.actions}>
          <button onClick={deleteProductHandler}>DELETE</button>
          <button onClick={toggleBackHandler}>BACK</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductFromCartModal;
