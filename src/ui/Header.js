import React, { useContext, useState } from "react";
import { Context } from "../store/context";
import { Link, NavLink, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import BrandIcon from "../images/Brand_icon.png";
import VectorDown from "../images/Vector-Down.png";
import EmptyCart from "../images/Empty_Cart.png";
import VectorUp from "../images/Vector-Up.png";

import DUMMY_DATA from "../data";
import CartOverlayModal from "./CartOverlayModal";
const links = {
  links: [
    { name: "WOMAN", id: "w1", style: classes.link, isActive: false },
    { name: "MAN", id: "w2", style: classes.link, isActive: false },
    { name: "KIDS", id: "w3", style: classes.link, isActive: false },
  ],
  activeLink: null,
};

const Header = (props) => {
  const navigate = useNavigate();
  const ctx = useContext(Context);
  const [isShown, setIsShown] = useState(false);
  // const [currency, setCurrency] = useState(ctx.currency);
  const [allProducts, setAllProducts] = useState(ctx.allProducts);

  const [isActive, setisActive] = useState(false);
  const [updLinks, setUpdLinks] = useState(links.links);
  const [activeLink, setActiveLink] = useState(null);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const activeStyle = `${isActive ? classes.active : ""}`;
  const itemsInCart = ctx.productsInCart.length;

  const showHandler = () => {
    setIsShown(!isShown);
  };

  const navigateHandler = () => {
    navigate("/cart", true);
  };

  const toogleActiveHandler = (id, name) => {
    const category = name.toLowerCase();
    const [...products] = ctx.allProducts;
    const filtredProducts = products.filter(
      (product) => product.category === category
    );
    setAllProducts((prev) => {
      return (prev = filtredProducts);
    });
    console.log(filtredProducts);
    ctx.filterByCategory(category);
    // const objIndex = updLinks.findIndex((link) => link.id === id);
    // updLinks[objIndex].style = classes.active;
    // console.log(objIndex);
    // const y = [...updLinks];
    // setUpdLinks(y);

    setActiveLink(id);
  };

  const overlayHandler = () => {
    console.log("click");
    setIsOverlayActive(true);
  };

  const closeModalHandler = () => {
    console.log("click");
    setIsOverlayActive(false);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navLinks}>
          {updLinks.map((link) => (
            <li
              onClick={() => toogleActiveHandler(link.id, link.name)}
              // onClick={() => sortHandler()}
              key={link.id}
              className={`${link.style} ${
                link.id === activeLink ? classes["link__active"] : " "
              }`}
              // className={link.id === activeLink ? classes.active : classes.link}
            >
              <Link to="/"> {link.name}</Link>
            </li>
          ))}
        </ul>
        <img
          className={classes["brand-icon"]}
          src={BrandIcon}
          alt="brand icon"
        />
        <div>
          <div className={classes.actions}>
            <h1 className={classes.currency}>{ctx.currency}</h1>
            <img
              onClick={showHandler}
              className={classes["vector-down"]}
              src={isShown ? VectorUp : VectorDown}
              alt="vector down"
            />
            {isShown ? (
              <div className={classes.switcher}>
                <h1
                  className={classes.currency}
                  onClick={() => {
                    ctx.changeCurrency("$");
                    setIsShown(!isShown);
                  }}
                >
                  $ USD
                </h1>
                <h1
                  className={classes.currency}
                  onClick={() => {
                    ctx.changeCurrency("€");
                    setIsShown(!isShown);
                  }}
                >
                  € EUR
                </h1>
                <h1
                  className={classes.currency}
                  onClick={() => {
                    ctx.changeCurrency("¥");
                    setIsShown(!isShown);
                  }}
                >
                  ¥ JPY
                </h1>
              </div>
            ) : (
              ""
            )}
            <img
              onClick={navigateHandler}
              onMouseOver={overlayHandler}
              className={classes["empty-cart"]}
              src={EmptyCart}
              alt="empty down"
            />
            {isOverlayActive ? (
              <CartOverlayModal onClose={closeModalHandler} />
            ) : (
              ""
            )}
            {itemsInCart ? (
              <h2 className={classes.itemsInCart}>{itemsInCart}</h2>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
