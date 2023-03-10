import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "./CartItem";
const Cart = ({ cart }) => {
  return (
    <div>
      <p>Cart</p>
      <CartItems>
        {cart.map((cartItem) => (
          <CartItem
            id={cartItem.id}
            name={cartItem.name}
            image={cartItem.image}
            price={cartItem.price}
            quantity={cartItem.quantity}
            key={cartItem.id}
          />
        ))}
      </CartItems>
      <Link to={"/shop"}>BACK</Link>
    </div>
  );
};
const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Cart;
