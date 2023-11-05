import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminHomePage, CartPage, Homepage, LoginPage, ProductDetail, Rekap } from "../pages";
import { ProtectedRoute } from "../components";

const Router = () => {
  return (
    <div className="px-10 pt-24 pb-5">
      <ProtectedRoute>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<AdminHomePage />} />
          <Route path="/rekap" element={<Rekap />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes>
      </ProtectedRoute>
    </div>
  );
};

export default Router;
