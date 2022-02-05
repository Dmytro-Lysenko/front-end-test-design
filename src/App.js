import { Routes, Route } from "react-router-dom";
import ProductItem from "./components/products/ProductItem";

import Home from "./pages/Home";
import DUMMY_DATA from "./data";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home products={DUMMY_DATA} />}></Route>
      <Route path="/:itemId" element={<ProductItem products={DUMMY_DATA} />}></Route>
    </Routes>
  );
}

export default App;
