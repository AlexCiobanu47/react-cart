import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import PRODUCTS from "./PRODUCTS";
import Shop from "./Shop";
import ShopItem from "./ShopItem";

const ShopRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route
        exact
        path="/shop/1"
        element={
          <ShopItem
            image={PRODUCTS[0].image}
            name={PRODUCTS[0].name}
            price={PRODUCTS[0].price}
          />
        }
      />
      <Route
        exact
        path="/shop/2"
        element={
          <ShopItem
            id={PRODUCTS[1].id}
            image={PRODUCTS[1].image}
            name={PRODUCTS[1].name}
            price={PRODUCTS[1].price}
          />
        }
      />
      <Route
        exact
        path="/shop/3"
        element={
          <ShopItem
            id={PRODUCTS[2].id}
            image={PRODUCTS[2].image}
            name={PRODUCTS[2].name}
            price={PRODUCTS[2].price}
          />
        }
      />
      <Route
        exact
        path="/shop/4"
        element={
          <ShopItem
            id={PRODUCTS[3].id}
            image={PRODUCTS[3].image}
            name={PRODUCTS[3].name}
            price={PRODUCTS[3].price}
          />
        }
      />
      <Route
        exact
        path="/shop/5"
        element={
          <ShopItem
            id={PRODUCTS[4].id}
            image={PRODUCTS[4].image}
            name={PRODUCTS[4].name}
            price={PRODUCTS[4].price}
          />
        }
      />
      <Route
        exact
        path="/shop/6"
        element={
          <ShopItem
            id={PRODUCTS[5].id}
            image={PRODUCTS[5].image}
            name={PRODUCTS[5].name}
            price={PRODUCTS[5].price}
          />
        }
      />
      <Route
        exact
        path="/shop/7"
        element={
          <ShopItem
            id={PRODUCTS[6].id}
            image={PRODUCTS[6].image}
            name={PRODUCTS[6].name}
            price={PRODUCTS[6].price}
          />
        }
      />
      <Route
        exact
        path="/shop/8"
        element={
          <ShopItem
            id={PRODUCTS[7].id}
            image={PRODUCTS[7].image}
            name={PRODUCTS[7].name}
            price={PRODUCTS[7].price}
          />
        }
      />
    </Routes>
  );
};
export default ShopRoutes;
