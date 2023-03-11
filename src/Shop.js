import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Product from "./Product";
import PRODUCTS from "./PRODUCTS";
const Shop = ({ displayCart, addToCart }) => {
  const handleClick = () => {
    displayCart();
  };
  return (
    <ShopWrapper>
      <HeaderWrapper>
        <h1>Shop</h1>
        <LinkWrappper to={"/cart"}>
          {" "}
          <BuyButton onClick={handleClick}>SHOW CART</BuyButton>
        </LinkWrappper>
      </HeaderWrapper>
      <Products>
        {PRODUCTS.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
            addToCart={addToCart}
          />
        ))}
      </Products>
    </ShopWrapper>
  );
};
const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinkWrappper = styled(Link)`
  align-self: flex-end;
`;
const BuyButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;
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
