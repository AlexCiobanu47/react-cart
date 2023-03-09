import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import PRODUCTS from "./PRODUCTS";
const Shop = (cart, setCart) => {
  const addToCart = (item) => {
    if (cart.length === 0) {
      const newCart = cart.slice();
      newCart.push(item);
      setCart(newCart);
    } else {
      const alreadyInCart = cart
        .map((cartItem) => cartItem.id)
        .includes(item.id);
      if (alreadyInCart) {
        changeQuantity(item.id);
      } else {
        setCart([...cart, item]);
      }
    }
  };
  const changeQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const displayCart = () => {
    console.log(cart);
  };
  return (
    <ShopWrapper>
      <div className="shopTitle">
        <h1>Shop</h1>
        <button onClick={displayCart}>SHOW CART</button>
      </div>
      <Products>
        {PRODUCTS.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            key={product.id}
          />
        ))}
      </Products>
    </ShopWrapper>
  );
};
const ShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 3rem;
`;

export default Shop;
