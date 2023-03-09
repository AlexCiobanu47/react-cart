import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopRoutes from "./ShopRoutes";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <ShopRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
