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
    <div className="App">
      <BrowserRouter>
        <ShopRoutes
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          displayCart={displayCart}
          changeQuantity={changeQuantity}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
