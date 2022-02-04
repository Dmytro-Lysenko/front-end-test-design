import React, { useContext } from "react";
import classes from "./CardItem.module.css";
import { Context } from "../store/context";

const CardItem = (props) => {
  const ctx = useContext(Context);
  console.log(ctx.course);

  const cursePrice = (props.price * ctx.course).toFixed(0);
  const { id, type, img, isOnStock, price } = props;
  return (
    <div className={classes.card}>
      <div className={classes.container}>
        <img src={img} alt={type} />
      </div>
      <h1>{type}</h1>
      <h1>
        {ctx.currency}
        {cursePrice}
      </h1>
    </div>
  );
};

export default CardItem;
