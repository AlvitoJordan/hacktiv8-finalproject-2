import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage, Homepage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default Router;
