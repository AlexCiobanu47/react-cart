import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "./CartItem";
const Cart = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div>
      <CartItems>
        {cart.map((cartItem) => (
          <CartItem
            id={cartItem.id}
            name={cartItem.name}
            image={cartItem.image}
            price={cartItem.price}
            quantity={cartItem.quantity}
            key={cartItem.id}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <p>
          TOTAL:{" "}
          {cart
            .reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0)
            .toFixed(2)}
        </p>
      </CartItems>
      <Link to={"/shop"}>BACK</Link>
    </div>
  );
};
const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Cart;
