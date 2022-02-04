import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import BrandIcon from "../images/Brand_icon.png";
import VectorDown from "../images/Vector-Down.png";
import EmptyCart from "../images/Empty_Cart.png";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const showHandler = () => {
    setIsShown(!isShown);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>WOMAN</li>
          <li>MAN</li>
          <li>KIDS</li>
        </ul>
        <div>
          <img
            className={classes["brand-icon"]}
            src={BrandIcon}
            alt="brand icon"
          />
          <div className={classes.actions}>
            <h1>$</h1>
            <img
              onClick={showHandler}
              className={classes["vector-down"]}
              src={VectorDown}
              alt="vector down"
            />
            {isShown ? (
              <div className={classes.switcher}>
                <h1>$ USD</h1>
                <h1>€ EUR</h1>
                <h1>¥ JPY</h1>
              </div>
            ) : (
              ""
            )}
            <img
              className={classes["empty-cart"]}
              src={EmptyCart}
              alt="empty down"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
