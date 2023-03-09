import React from "react";
import styled from "styled-components";
import Product from "./Product";
import PRODUCTS from "./PRODUCTS";
const Shop = ({ cart, setCart, displayCart, addToCart }) => {
  const handleClick = () => {
    displayCart();
  };
  return (
    <ShopWrapper>
      <div className="shopTitle">
        <h1>Shop</h1>
        <button onClick={handleClick}>SHOW CART</button>
      </div>
      <Products>
        {PRODUCTS.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            key={product.id}
            addToCart={addToCart}
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
