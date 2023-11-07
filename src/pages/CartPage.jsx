import React, { useEffect, useState } from "react";
import { CartContent, CartHeader, Header } from "../components/molecules";
import { Button, Text } from "../components";
import { BackIcon } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeProduct } from "../redux/cart/Cart";
import NoItems from "./NoItems";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart } = useSelector((state) => state.addCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalPrices, setTotalPrices] = useState(0);

  const handleQuantityChange = (id, value) => {
    dispatch(changeQuantity({ id, quantity: value }));
  };
  useEffect(() => {
    const calculateTotalPrices = () => {
      const newTotalPrices = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalPrices(newTotalPrices);
    };
    calculateTotalPrices();
  }, [cart]);
  const handleDeleteProduct = (data) => {
    dispatch(removeProduct(data));
  };


  function quantityFull(val) {
    if (val.quantity <= val.stock) {
      return false
    } else {
      return true
    }
  }
  return (
    <div className="mx-4">
      <Header title="Shopping Cart" />
      {cart.length > 0 && <CartHeader />}
      {cart.length > 0 && (
        <>
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
          <div className="flex gap-20 justify-end items-center my-10">
            <Text className="text-darkgray font-semibold text-3xl" text="Total" />
            <Text className="text-darkgray font-semibold text-3xl" text={`$ ${totalPrices}`} />
          </div>
          <div className="flex flex-row justify-between mt-6 pt-4 pb-4">
            <Button className="bg-white hover:bg-secondary hover:border-transparent hover:text-white text-primary font-semibold py-2 px-3 border-[3px] border-primary rounded-md shadow" onClick={() => navigate("/")}>
              <div className="flex flex-row px-5">
                <BackIcon className="hover:text-white" />
                <Text className="ml-3" text="Continue Shopping" />
              </div>
            </Button>
            <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow" >Checkout</Button>
          </div>
        </>
      ) : (
        <NoItems />
      )}
    </div>
  );
};

export default CartPage;
