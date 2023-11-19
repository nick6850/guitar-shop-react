import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import ShoppingCart from "./components/ShoppingCart";
import ItemsList from "./components/ItemsList";
import { ContextProvider } from "./Context/GuitarContext";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ItemsList />} />
          <Route path="cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
