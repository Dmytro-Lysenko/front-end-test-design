import React, { useContext, useState } from "react";
import classes from "./CartList.module.css";
import RightArrow from "../../images/LeftArrow.png";
import LeftArrow from "../../images/RightArrow.png";
import { Context } from "../../store/context";

const CartItem = (props) => {
  const ctx = useContext(Context);
  const { brand, id, image, sizes, smallImage, category, price, chosenSizes } =
    props;
  const [counter, setCounter] = useState(1);
  const [pcs, setPcs] = useState(1);
  const [activeImage, setActiveImage] = useState(smallImage[counter]);

  console.log(counter);
  console.log(smallImage.length);
  const changeImageToLeftHandler = () => {
    if (counter === 0) {
      setCounter(smallImage.length - 1);
    }
    setCounter((prevCounter) => {
      return (prevCounter = prevCounter - 1);
    });
    setActiveImage(smallImage[counter]);
  };

  const changeImageToRightHandler = () => {
    if (counter === smallImage.length - 1) {
      setCounter(0);
    }
    console.log("click");
    setCounter((prevCounter) => {
      return (prevCounter = prevCounter + 1);
    });
    setActiveImage(smallImage[counter]);
  };

  const increasePcsHandler = () => {
    if (pcs > 0) {
      setPcs((prev) => {
        return (prev += 1);
      });
    }
  };
  const decreasePcsHandler = () => {
    if (pcs === 1) {
      return;
    }
    setPcs((prev) => {
      return (prev -= 1);
    });
  };
  return (
    <>
      <div className={classes["cart-product"]}>
        <div className={classes["cart-product__container"]}>
          <div className={classes["cart-product__container__left"]}>
            <h1>Apollo</h1>
            <p>Run something</p>
            <h2>
              {ctx.currency}
              {(ctx.course * price).toFixed(2)}
            </h2>
            <ul className={classes["sizes-container"]}>
              {chosenSizes.map((size, index) => (
                <li key={index}>{size.size}</li>
              ))}
            </ul>
          </div>
          <div className={classes["cart-product__container__right"]}>
            <div className={classes["cart-product__container__right__actions"]}>
              <button onClick={increasePcsHandler}>+</button>
              <h1 className={classes.pcs}>{pcs}</h1>
              <button onClick={decreasePcsHandler}>-</button>
            </div>
            <div className={classes["cart-product__container__right__image"]}>
              <img
                onClick={changeImageToLeftHandler}
                className={classes.arrowLeft}
                src={LeftArrow}
                alt="left arrow"
              />
              <img
                className={classes.productImage}
                src={activeImage}
                alt="left arrow"
              />
              <img
                onClick={changeImageToRightHandler}
                className={classes.arrowRight}
                src={RightArrow}
                alt="right arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;