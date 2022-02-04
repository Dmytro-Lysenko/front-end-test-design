import React from "react";
import classes from "./CardItem.module.css";

const CardItem = (props) => {
  const { id, type, img, isOnStock, price } = props;
  return (
    <div className={classes.card}>
      <div className={classes.container}>
        <img src={img} alt={type} />
      </div>
      <h1>{type}</h1>
      <h1>${price}</h1>
    </div>
  );
};

export default CardItem;
