import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ShopRoutes from "./ShopRoutes";
function App() {
  const [cart, setCart] = useState([]);
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
        changeQuantity(item.id, 1);
      } else {
        setCart([...cart, item]);
      }
    }
  };
  const removeFromCart = (item) => {
    if (cart.length === 0) {
      console.error(
        "Couldn't remove the item from shopping cart: The shopping cart is empty."
      );
    } else {
      const alreadyInCart = cart
        .map((cartItem) => cartItem.id)
        .includes(item.id);
      if (alreadyInCart) {
        if (item.quantity < 2) {
          console.log(
            "Couldn't remove the item from shopping cart: The item no longer exits."
          );
        } else {
          changeQuantity(item.id, -1);
        }
      } else {
        console.error(
          "Couldn't remove the item from shopping cart: The item doesn't exit."
        );
      }
    }
  };
  const changeQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };
  const displayCart = () => {
    console.log(cart);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ShopRoutes
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          displayCart={displayCart}
          changeQuantity={changeQuantity}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
