import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { ImMan } from "react-icons/im";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ImWoman } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

import classes from "./Header.module.css";

const currencies = [
  { id: "c1", type: "$", title: "USD" },
  { id: "c2", type: "€", title: "EUR" },
  { id: "c3", type: "¥", title: "JPY" },
];

const mobileNavLinks = {
  links: [
    {
      name: "WOMAN",
      id: "w1",
      style: classes.mobileNavLink,
      icon: <ImWoman />,
      isActive: false,
    },
    {
      name: "MAN",
      id: "w2",
      style: classes.mobileNavLink,
      icon: <ImMan />,
      isActive: false,
    },
    {
      name: "KIDS",
      id: "w3",
      style: classes.mobileNavLink,
      icon: <FaChild />,
      isActive: false,
    },
  ],
  activeLink: null,
};

const MobileNav = (props) => {
  const { isMobileNav } = props;
  console.log(isMobileNav);
  const ctx = useContext(Context);
  const [activeLink, setActiveLink] = useState(null);
  const [isSwitcherActive, setIsSwitcherActive] = useState(false);
  const [isMobiLeNavActive, setIsMobiLeNavActive] = useState(false);

  useEffect(() => {
    setIsMobiLeNavActive(isMobileNav);
  }, [isMobileNav]);

  const switcherStyle = ` ${
    isSwitcherActive ? classes.mobileNavSwitcher : classes.displayNone
  }`;

  const mobileNavStyles = `${classes.mobileNav} ${
    isMobiLeNavActive ? classes["mobileNav__active"] : classes.mobileNav
  }`;

  const toogleMobileNav = () => {
    setIsMobiLeNavActive(!isMobiLeNavActive);
  };

  const mobileSwitcher = () => {
    setIsSwitcherActive(!isSwitcherActive);
    console.log("clicked");
    console.log(isSwitcherActive);
  };

  const changeCurrencyHandler = (currency) => {
    ctx.changeCurrency(currency);
    setIsSwitcherActive(!isSwitcherActive);
  };

  const toogleActiveHandler = (id, name) => {
    const category = name.toLowerCase();
    const [...products] = ctx.allProducts;
    const filtredProducts = products.filter(
      (product) => product.category === category
    );
  };
  return (
    <ul className={mobileNavStyles}>
      <li onClick={toogleMobileNav} className={classes.mobileNavLink}>
        <IoIosCloseCircleOutline />
      </li>
      {mobileNavLinks.links.map((link) => (
        <li
          onClick={() => toogleActiveHandler(link.id, link.name)}
          // onClick={() => sortHandler()}
          key={link.id}
          className={`${link.style} ${
            link.id === activeLink ? classes["link__active"] : " "
          }`}
          // className={link.id === activeLink ? classes.active : classes.link}
        >
          {link.icon}
          <Link to="/"> {link.name}</Link>
        </li>
      ))}
      <li onClick={mobileSwitcher} className={classes.mobileNavLink}>
        <span className={classes.mobCurrency}>{ctx.currency}</span>
        <h1>CURRENCY</h1>{" "}
        {isSwitcherActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </li>
      <ul className={switcherStyle}>
        {currencies.map((currency) => (
          <li
            onClick={() => changeCurrencyHandler(currency.type)}
            key={currency.id}
            id={currency.id}
          >
            <span>{currency.type}</span>
            <h1>{currency.title}</h1>
          </li>
        ))}
      </ul>
      <li className={classes.mobileNavLink}>
        <FaShoppingCart /> <Link to="/cart"> CART</Link>
      </li>
    </ul>
  );
};

export default MobileNav;
