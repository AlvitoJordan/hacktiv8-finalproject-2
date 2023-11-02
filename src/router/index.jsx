import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage, Homepage, LoginPage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
