import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Testing } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
