import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/context";
import classes from "./ProductItem.module.css";

const ProductItem = ({ products }) => {
  console.log(products);
  const ctx = useContext(Context);

  const [isActive, setIsActive] = useState(null);
  const [u, setU] = useState(false);

  const params = useParams();
  console.log(params.itemId);

  const productItemData = products.find((item) => item.id === params.itemId);
  const { brand, type, price } = productItemData;

  const activeSizeHandler = (id) => {
    console.log(id);
    setIsActive(id);
  };

  //   const activeStyle = `${u ? classes.text : classes.textActive}`;
  //   const h = `${classes.text} ${u ? classes.textActive : " "}`;
  //   const styles = `${classes.size} `;

  return (
    <div>
      <h1>Test{params.id}</h1>
      <div className={classes["product-item"]}>
        <div className={classes["product-image-container"]}>
          {productItemData.smallImage.map((img, ind) => (
            <img key={ind} id={ind} src={img} alt={productItemData.type} />
          ))}
        </div>

        <div className={classes["content-container"]}>
          <div className={classes["main-image-container"]}>
            <img src={productItemData.image} alt={productItemData.type} />
          </div>
          <div className={classes["product-content-container"]}>
            <div className={classes["product-content-container-header"]}>
              <h2>{brand}</h2>
              <h1>{type}</h1>
              <p>Size:</p>
            </div>

            <ul className={classes["product-content-container-sizes"]}>
              {productItemData.sizes.map((item) => (
                <li
                  className={`${classes.size} ${
                    isActive === item.id ? classes["size__active"] : " "
                  }`}
                  onClick={() => activeSizeHandler(item.id)}
                  key={item.id}
                  id={item.id}
                >
                  {item.size}
                </li>
              ))}
            </ul>

            <div className={classes["product-content-container-description"]}>
              <h1>Price:</h1>
              <span>
                {ctx.currency}
                {productItemData.price}
              </span>
              <button>
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
