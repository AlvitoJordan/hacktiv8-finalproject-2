import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import CartPage from "../pages/CartPage";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
  );
};

export default Router;
