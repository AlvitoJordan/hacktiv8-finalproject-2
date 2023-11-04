import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage, Homepage, LoginPage } from "../pages";

const Router = () => {
  return (
    <div className="px-10 pt-24 pb-5">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default Router;
