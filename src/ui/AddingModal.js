import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./AddingModal.module.css";

const AddingModal = (props) => {
  const [isActive, setIsActive] = useState();
  const styles = `${classes.modal} ${isActive ? classes.active : " "}`;

  useEffect(() => {
    setIsActive(props.isActive);
    // if (isActive) {
    const timer = setTimeout(() => {
      setIsActive(null);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [props.isActive]);

  ///className={isActive ? classes.active : classes.modal}
  return (
    <div className={styles}>
      <h1>You add product "{props.children}" to cart</h1>
    </div>
  );
};

export default AddingModal;
