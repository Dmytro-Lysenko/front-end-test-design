import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/context";
import classes from "./ProductItem.module.css";
import NoImage from "../../images/No-Picture.png";

const ProductItem = ({ products }) => {
  const ctx = useContext(Context);

  const [isActive, setIsActive] = useState(null);
  const [chosenSize, setChosenSize] = useState(null);
  const [isSizeIsInCart, setIsSizeIsInCart] = useState(null);

  const params = useParams();

  const productItemData = products.find((item) => item.id === params.itemId);
  const { brand, type, price, id } = productItemData;
  // console.log(ctx.productsInCart);
  // const itemIsInCart = ctx.productIsInCart(id);

  // const chosenSizeIsInCart = ctx.productsInCart.map((product) =>
  //   product.chosenSizes.some((size) => size.size === chosenSize)
  // );

  // const filteredProduct = ctx.productsInCart.filter(
  //   (product) => product.id === id
  // );

  // const DMDT = [
  //   {
  //     item1: "r",
  //     chosenSizes: [
  //       { pcs: 1, size: "XS" },
  //       { pcs: 1, size: "M" },
  //       { pcs: 1, size: "L" },
  //     ],
  //   },
  //   {
  //     item1: "rrr",
  //     chosenSizes: [
  //       { pcs: 1, size: "XS" },
  //       { pcs: 1, size: "M" },
  //       { pcs: 1, size: "L" },
  //     ],
  //   },
  // ];

  // const o = DMDT.map((item) =>
  //   item.chosenSizes.some((size) => size.size === "Ms")
  // );

  // console.log(DMDT);
  // console.log(o, chosenSize);

  const activeSizeHandler = (id, size) => {
    setChosenSize(size);
    setIsActive(id);
  };

  const addToCartHandler = () => {
    if (chosenSize === null) {
      // alert("pls chose some size!");
      return;
    }

    // if (!ctx.productsInCart.length) {
    //   console.log("there are no items in cart");
    //   const productInCart = {
    //     chosenSizes: [{ pcs: 1, size: chosenSize }],
    //     ...productItemData,
    //   };
    //   ctx.addToCart(productInCart);
    // }

    
    ctx.addToCart(productItemData, chosenSize);
  };

  console.log();
  if (productItemData.smallImage === undefined || null) {
    productItemData.smallImage = [NoImage, NoImage, NoImage];
  }

  return (
    <div>
      <div className={classes["product-item"]}>
        <div className={classes["content-container"]}>
          <div className={classes["main__image__container"]}>
            <div className={classes["product-image-container"]}>
              {productItemData.smallImage.map((img, ind) => (
                <img key={ind} id={ind} src={img} alt={productItemData.type} />
              ))}
            </div>
            <div className={classes["image-container"]}>
              <img src={productItemData.image} alt={productItemData.type} />
            </div>
          </div>

          <div className={classes["product-content-container"]}>
            <div className={classes["product-content-container-header"]}>
              <h2>{brand}</h2>
              <h1>{type}</h1>
              <p>Size:</p>
            </div>

            <ul className={classes["product-content-container-sizes"]}>
              {!productItemData.sizes ? (
                <p>There are no sizes availeble</p>
              ) : (
                productItemData.sizes.map((item) => (
                  <li
                    className={`${classes.size} ${
                      isActive === item.id ? classes["size__active"] : " "
                    }`}
                    onClick={() => activeSizeHandler(item.id, item.size)}
                    key={item.id}
                    id={item.id}
                  >
                    {item.size}
                  </li>
                ))
              )}
            </ul>

            <div className={classes["product-content-container-description"]}>
              <h1>Price:</h1>
              <span>
                {ctx.currency}
                {(price * ctx.course).toFixed(2)}
              </span>
              <button onClick={() => addToCartHandler()}>
                <nobr>ADD TO CART</nobr>
              </button>
              <p>{productItemData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
