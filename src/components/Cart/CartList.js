import React, { useState, useContext } from "react";
import { Context } from "../../store/context";
import classes from "./CartList.module.css";
import ManSweater1 from "../../images/Man-Sweater1.jpeg";
import ManSweater2 from "../../images/Man-Sweater2.jpeg";
import ManSweater3 from "../../images/Man-Sweater3.jpeg";

import CartItem from "./CartItem";

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

const CartList = (props) => {
  const [activeImage, setActiveImage] = useState();
  const ctx = useContext(Context);
  console.log(ctx.productsInCart);
  // if (!ctx.productsInCart.length) {
  //   return <h1>There are no items in cart</h1>;
  // }
 

  return (
    <div>
      {DD.map((product, index) => (
        <CartItem
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
    </div>
  );
};

export default CartList;
