import React from "react";
import MainCart from "../components/organisms/MainCart";
import { Layout } from "../components";
import MainEmptyCart from "../components/organisms/MainEmptyCart";

const CartPage = () => {
  return (
    <Layout>
      <MainCart />
    </Layout>
  );
};

export default CartPage;
