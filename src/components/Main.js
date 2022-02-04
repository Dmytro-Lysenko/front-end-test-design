import React from "react";
import DUMMY_DATA from "../data";
import CardItem from "./CardItem";
import classes from "./Main.module.css";

const Main = (props) => {
  console.log(DUMMY_DATA);
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Category name</h1>
      <div className={classes.cardList}>
        {DUMMY_DATA.map((card) => (
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
