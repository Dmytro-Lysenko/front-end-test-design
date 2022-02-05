import React, { useContext } from "react";
import classes from "./CardItem.module.css";
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";

const CardItem = (props) => {
  const ctx = useContext(Context);
  let navigate = useNavigate();

  const cursePrice = (props.price * ctx.course).toFixed(0);
  const { id, type, img, isOnStock, price } = props;

  const styles = `${classes["out-of-stock"]} + ${
    isOnStock ? "" : classes["display-unset"]
  }`;

  const navigateHandler = (id) => {
    console.log("click", id);
    navigate(`/${id}`, { replace: false });
  };

  return (
    <div className={classes.card}>
      <div onClick={() => navigateHandler(id)} className={classes.container}>
        <h1 className={styles}>OUT OF STOCK</h1>
        <img
          className={isOnStock ? "" : classes["image-overlay"]}
          src={img}
          alt={type}
        />
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
