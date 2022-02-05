import { createContext, useState } from "react";

export const Context = createContext({
  allProducts: [],
  setAllProducts: (products) => {},
  course: 1,
  currency: "$",
  changeCurrency: (currency) => {},
});

const ContextProvider = (props) => {
  const [currency, setCurrency] = useState("$");
  const [allProds, setAlprods] = useState([]);

  const setAllProductsHandler = (products) => {
    setAlprods(products);
  };

  const changeCurrencyHandler = (curr) => {
    console.log(curr);
    setCurrency(curr);
  };

  const updCourse = currency === "$" ? 1 : currency === "€" ? 1.3 : 0.7;

  const context = {
    allProducts: allProds,
    setAllProducts: setAllProductsHandler,
    course: updCourse,
    currency: currency,
    changeCurrency: changeCurrencyHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default ContextProvider;
