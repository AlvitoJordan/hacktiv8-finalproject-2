import React from "react";
import { CartContent, CartHeader, Header } from "../molecules";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  addToCheckout,
  changeQuantity,
  removeProduct,
} from "../../redux/cart/Cart";
import { useEffect } from "react";
import { Button, Text } from "../atoms";
import { BackIcon } from "../../assets";
import MainEmptyCart from "./MainEmptyCart";

const MainCart = (props) => {
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
    dispatch(addToCheckout(data));
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
          <div className="flex space-x-4 justify-end items-center my-10 ">
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
              TypeButton="ButtonPrimaryWithIcon"
              className="bg-white hover:bg-secondary hover:border-transparent hover:text-white text-primary font-semibold py-2 px-3 border-[3px] border-primary rounded-md shadow"
              onClick={() => navigate("/")}
              icon={<BackIcon />}
            >
              Continue Shopping
            </Button>

            <Button
              TypeButton="ButtonPrimary"
              className="text-white font-semibold"
              onClick={() => handleCheckout(cart)}
            >
              Checkout
            </Button>
          </div>
        </>
      ) : (
        <MainEmptyCart />
      )}
    </div>
  );
};

export default MainCart;
