import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage,LoginPage } from "../pages";
import Rekap from "../pages/Rekap";

const Router = () => {
  return (
    <div className="px-10 pt-24 pb-5">
      <Routes>
      <Route path="/" element={<Rekap />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </div>
    
  );
};

export default Router;
