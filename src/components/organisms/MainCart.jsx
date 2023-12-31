import React from "react";
import { CartContent, CartHeader, Header } from "../molecules";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  addToCheckout,
  changeQuantity,
  removeCart,
  removeProduct,
} from "../../redux/cart/Cart";
import { useEffect } from "react";
import { Button, Text } from "../atoms";
import { BackIcon } from "../../assets";
import MainEmptyCart from "./MainEmptyCart";
import Swal from "sweetalert2";
import { updateProduct } from "../../redux/fetch/Get";

const MainCart = () => {
  const { cart } = useSelector((state) => state.addCart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalPrices, setTotalPrices] = useState(0);

  const handleQuantityChange = (id, value) => {
    dispatch(changeQuantity({ id, quantity: value }));
  };
  useEffect(() => {
    const calculateTotalPrices = () => {
      const newTotalPrices = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrices(newTotalPrices);
    };
    calculateTotalPrices();
  }, [cart]);
  const handleDeleteProduct = (data) => {
    dispatch(removeProduct(data));
  };

  function quantityFull(val) {
    if (val.quantity <= val.stock) {
      return false;
    } else {
      return true;
    }
  }

  const handleCheckout = (data) => {
    const checkStock = data.some((item) => item.quantity > item.stock);
    if (checkStock) {
      Swal.fire({
        icon: "error",
        title: "Checkout failed",
        text: "Quantity exceeds stock",
      });
      return;
    }
    data.forEach((item) => {
      dispatch(
        updateProduct({
          id: item.id,
          quantity: item.quantity,
        })
      );
    });

    dispatch(addToCheckout(data));
    dispatch(removeCart());

    navigate("/");

    Swal.fire({
      title: "Success",
      text: "Product has been checkout",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton:
          "font-semibold px-6 py-2 hover:bg-secondary bg-primary text-white rounded-lg",
      },
      buttonsStyling: false,
    });
  };

  return (
    <div className="w-full">
      {cart.length > 0 && <Header title="Shopping Cart" />}
      {cart.length > 0 && (
        <>
          <CartHeader />
          {cart.map((item) => (
            <CartContent
              key={item.id}
              img={item.image}
              price={`$ ${item.price}`}
              total={`$ ${item.price * item.quantity}`}
              categories={item.category}
              title={item.title}
              value={item.quantity}
              onChange={(val) => handleQuantityChange(item.id, val)}
              deleteProduct={() => handleDeleteProduct(item)}
              active={quantityFull(item)}
            />
          ))}
        </>
      )}

      {cart.length > 0 ? (
        <>
          <div className="flex space-x-4 justify-end items-center my-10">
            <Text className="font-semibold text-3xl" text="Total =" />
            <Text
              type="dolar"
              className="font-semibold text-3xl"
              text={`$ ${totalPrices}`}
              maxLength="8"
            />
          </div>
          <div className="flex flex-row justify-between mt-6 pt-4 pb-4">
            <Button
              type="CardOutlineButtonWithIcon"
              onClick={() => navigate("/")}
              icon={<BackIcon />}
              text="Continue Shopping"
            />

            <Button
              type="SmallPrimaryButton"
              onClick={() => handleCheckout(cart)}
              text="Checkout"
            />
          </div>
        </>
      ) : (
        <MainEmptyCart />
      )}
    </div>
  );
};

export default MainCart;
