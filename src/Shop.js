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
      <div className="shopTitle">
        <h1>Shop</h1>
        <Link to={"/cart"}>
          {" "}
          <button onClick={handleClick}>SHOW CART</button>
        </Link>
      </div>
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
