import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AvailabledPage,
  CartPage,
  DisabledPage,
  Homepage,
  LoginPage,
  ProductDetail,
  Rekap,
} from "../pages";
import { ProtectedRoute } from "../services";
import SearchPage from "../pages/SearchPage";
import NotFound404Page from "../pages/NotFound404Page";

const Router = () => {
  return (
    <div className="">
      <ProtectedRoute>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/availabled" element={<AvailabledPage />} />
          <Route path="/disabled" element={<DisabledPage />} />
          <Route path="/rekap" element={<Rekap />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/search/:searchProduct" element={<SearchPage />} />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
      </ProtectedRoute>
    </div>
  );
};

export default Router;
