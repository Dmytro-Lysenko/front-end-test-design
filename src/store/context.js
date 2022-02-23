import { createContext, useState } from "react";

export const Context = createContext({
  productsInCart: [],
  addToCart: (product) => {},
  deleteFromCart: (id) => {},
  productIsInCart: (id) => {},
  allProducts: [],
  filterBy: "",
  filterByCategory: (category) => {},
  setAllProducts: (products) => {},
  course: 1,
  currency: "$",
  changeCurrency: (currency) => {},
});

const test = [
  {
    id: "b1",
    chosenSizes: [
      { size: "XS", pcs: 1 },
      { size: "M", pcs: 1 },
    ],
  },

  { id: "b2", chosenSizes: [{ size: "XS", pcs: 1 }] },
  {
    id: "b3",
    chosenSizes: [{ size: "M", pcs: 1 }],
  },
];

const ContextProvider = (props) => {
  const [filterBy, setFilterBy] = useState(null);
  const [currency, setCurrency] = useState("$");
  const [allProds, setAllprods] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

  const setAllProductsHandler = (products) => {
    setAllprods(products);
  };

  const changeCurrencyHandler = (curr) => {
    setCurrency(curr);
  };

  const addToCartHandler = (product, chosenSize) => {
   

    setItemsInCart((prevProduct) => {
      return (prevProduct = itemsInCart.concat(product));
    });
  };

  const isInCartHandler = (id) => {
    return itemsInCart.some((item) => item.id === id);
  };

  const removeFromCartHandler = (id) => {
    setItemsInCart((prevProd) => {
      return (prevProd = itemsInCart.filter((item) => item.id !== id));
    });
  };

  const filterByHandler = (category) => {
    setFilterBy(category);
    // const [...products] = allProds;
    // setAllprods((prevProd) => {
    //   return (prevProd = products.filter((item) => item.category === category));
    // });
  };

  const updCourse = currency === "$" ? 1 : currency === "€" ? 1.3 : 0.7;

  const context = {
    productsInCart: itemsInCart,
    addToCart: addToCartHandler,
    deleteFromCart: removeFromCartHandler,
    productIsInCart: isInCartHandler,
    allProducts: allProds,
    filterBy: filterBy,
    filterByCategory: filterByHandler,
    setAllProducts: setAllProductsHandler,
    course: updCourse,
    currency: currency,
    changeCurrency: changeCurrencyHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default ContextProvider;
