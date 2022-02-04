import React, { useContext, useState } from "react";
import { Context } from "../store/context";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import BrandIcon from "../images/Brand_icon.png";
import VectorDown from "../images/Vector-Down.png";
import EmptyCart from "../images/Empty_Cart.png";
import VectorUp from "../images/Vector-Up.png";
const links = {
  links: [
    { name: "WOMAN", id: "w1", style: classes.link, isActive: false },
    { name: "MAN", id: "w2", style: classes.link, isActive: false },
    { name: "KIDS", id: "w3", style: classes.link, isActive: false },
  ],
  activeLink: null,
};

const Header = () => {
  const ctx = useContext(Context);
  const [isShown, setIsShown] = useState(false);
  // const [currency, setCurrency] = useState(ctx.currency);
  const [isActive, setisActive] = useState(false);
  const [updLinks, setUpdLinks] = useState(links.links);
  const [activeLink, setActiveLink] = useState(null);

  const activeStyle = `${isActive ? classes.active : ""}`;

  console.log(ctx.currency);
  const showHandler = () => {
    setIsShown(!isShown);
  };

  const toogleActiveHandler = (id) => {
    // const objIndex = updLinks.findIndex((link) => link.id === id);
    // updLinks[objIndex].style = classes.active;
    // console.log(objIndex);
    // const y = [...updLinks];
    // setUpdLinks(y);
    setActiveLink(id);
    console.log(id);
    console.log(activeLink);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {updLinks.map((link) => (
            <li
              onClick={() => toogleActiveHandler(link.id)}
              key={link.id}
              className={link.id === activeLink ? classes.active : classes.link}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <div>
          <img
            className={classes["brand-icon"]}
            src={BrandIcon}
            alt="brand icon"
          />
          <div className={classes.actions}>
            <h1>{ctx.currency}</h1>
            <img
              onClick={showHandler}
              className={classes["vector-down"]}
              src={isShown ? VectorUp : VectorDown}
              alt="vector down"
            />
            {isShown ? (
              <div className={classes.switcher}>
                <h1
                  onClick={() => {
                    ctx.changeCurrency("$");
                    setIsShown(!isShown);
                  }}
                >
                  $ USD
                </h1>
                <h1
                  onClick={() => {
                    ctx.changeCurrency("€");
                    setIsShown(!isShown);
                  }}
                >
                  € EUR
                </h1>
                <h1
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
