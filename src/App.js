import { Routes, Route } from "react-router-dom";
import ProductItem from "./components/products/ProductItem";

import Home from "./pages/Home";
import DUMMY_DATA from "./data";
import Header from "./ui/Header";
import Layout from "./ui/Layout";
import ProductDetail from "./pages/ProductDetail";
import ContextProvider from "./store/context";
import Cart from "./pages/Cart";

const t = () => {
  console.log("ssad");
};

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Header onFilter={t} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home products={DUMMY_DATA} />}
          ></Route>
          <Route
            path="/:itemId"
            element={<ProductDetail products={DUMMY_DATA} />}
          ></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </Layout>
    </ContextProvider>
  );
}

export default App;
