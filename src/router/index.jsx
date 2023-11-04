import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage,Homepage,LoginPage } from "../pages";
import NoItems from "../pages/NoItems";

const Router = () => {
  return (
    <div className="px-10 pt-24 pb-5">
      <Routes>
      <Route path="/" element={<NoItems />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </div>
    
  );
};

export default Router;
