import React, { useContext, useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Context } from "../store/context";
import classes from "./Main.module.css";

const Main = ({ products }) => {
  const ctx = useContext(Context);
  const [filterByCategory, setFilterByCategory] = useState(ctx.allProducts);
  console.log(ctx.filterBy);

  const { allProducts, filterBy } = ctx;

  const [...prods] = ctx.allProducts;
  const filtByCategory = prods.filter(
    (product) => product.category === ctx.filterBy
  );

  const mainProducts = filterBy ? filterByCategory : ctx.allProducts;
  const category = filterBy ? filterBy.toLocaleUpperCase() : "";

  useEffect(() => {
    setFilterByCategory(ctx.allProducts);
    ctx.setAllProducts(products);
  }, [products]);

  useEffect(() => {
    setFilterByCategory(filtByCategory);
    ctx.setAllProducts(products);
  }, [allProducts, filterBy]);

  console.log(ctx.allProducts);
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>{category} CATEGORY</h1>
      <div className={classes.cardList}>
        {mainProducts.map((card) => (
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
