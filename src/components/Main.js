import React, { useContext, useEffect } from "react";
import CardItem from "./CardItem";
import { Context } from "../store/context";
import classes from "./Main.module.css";

const Main = ({ products }) => {
  const ctx = useContext(Context);

  useEffect(() => {
    ctx.setAllProducts(products);
  }, [ctx, products]);

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Category name</h1>
      <div className={classes.cardList}>
        {products.map((card) => (
          <CardItem
            key={card.id}
            id={card.id}
            img={card.image}
            price={card.price}
            type={card.type}
            isOnStock={card.isOnStock}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
