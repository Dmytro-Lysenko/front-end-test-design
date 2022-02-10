import React, { useState, useContext } from "react";
import { Context } from "../../store/context";
import ManSweater1 from "../../images/Man-Sweater1.jpeg";
import ManSweater2 from "../../images/Man-Sweater2.jpeg";
import ManSweater3 from "../../images/Man-Sweater3.jpeg";

import CartOverlayItem from "./CartOverlayItem";
import classes from "./CartOverlayListItems.module.css";
import { useNavigate } from "react-router-dom";

const DD = [
  {
    id: "m1",
    chosenSizes: [
      { pcs: 1, size: "XS" },
      { pcs: 1, size: "S" },
      { pcs: 1, size: "M" },
      { pcs: 1, size: "L" },
    ],
    image: ManSweater1,
    smallImage: [ManSweater1, ManSweater2, ManSweater3],
    sizes: [
      { id: "n1", size: "XS", psc: 1 },
      { id: "n2", size: "S", psc: 2 },
      { id: "n3", size: "M", psc: 3 },
      { id: "n4", size: "L", psc: 3 },
    ],
    price: 52,
    category: "man",
    brand: "Gucci",
    type: "sweater1",
    isOnStock: true,
    description: `Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.`,
  },
  {
    id: "m2",
    chosenSizes: [
      { pcs: 1, size: "XS" },
      { pcs: 1, size: "S" },
      { pcs: 1, size: "M" },
      { pcs: 1, size: "L" },
    ],
    image: ManSweater2,
    smallImage: [ManSweater1, ManSweater2, ManSweater3],
    sizes: [
      { id: "f1", size: "XS", psc: 1 },
      { id: "f2", size: "S", psc: 3 },
      { id: "f3", size: "M", psc: 2 },
      { id: "f4", size: "L", psc: 5 },
    ],
    price: 32,
    category: "man",
    brand: "Brioni",
    type: "sweater2",
    isOnStock: true,
    description: `Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.`,
  },
];

const CartOverlayList = (props) => {
  const [activeImage, setActiveImage] = useState();
  const navigate = useNavigate();
  const ctx = useContext(Context);

  const prices = ctx.productsInCart.map((product) => product.price);
  const totalPrice = prices.reduce((a, b) => a + b, 0);
  const itemsInCart = ctx.productsInCart.length;
  console.log(itemsInCart);

  const toogleToCartHandler = () => {
    console.log("click in item");
    navigate("/cart", { replace: false });
    props.onClose();
  };

  // if (!ctx.productsInCart.length) {
  //   return <h1>There are no items in cart</h1>;
  // }

  return (
    <div>
      {ctx.productsInCart.slice(0, 2).map((product, index) => (
        <CartOverlayItem
          key={index}
          id={product.id}
          brand={product.brand}
          image={product.image}
          smallImage={product.smallImage}
          category={product.category}
          price={product.price}
          sizes={product.sizes}
          chosenSizes={product.chosenSizes}
        />
      ))}
      {itemsInCart > 2 ? (
        <div onClick={toogleToCartHandler} className={classes.others}>
          <span />
          <span />
          <span />
        </div>
      ) : (
        ""
      )}
      <div className={classes["total-container"]}>
        <div className={classes["price-container"]}>
          <h1>Total</h1>
          <span>
            {ctx.currency} {totalPrice}
          </span>
        </div>
        {itemsInCart === 0 ? (
          ""
        ) : (
          <div className={classes["actions-container"]}>
            <button onClick={toogleToCartHandler}>View bag</button>
            <button>CHECK OUT</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartOverlayList;
