import React from "react";
import { useNavigate } from "react-router-dom";
import { EmptyCart, ShoppingCart } from "../../assets";
import { Button, Text } from "../atoms";

const MainEmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <EmptyCart />
      <Text
        className="font-bold text-3xl text-center lg:text-5xl mt-5 text-darkgray"
        text="You cart is currenty empty!"
      ></Text>
      <Text
        className="text-base text-center font-medium mt-4 text-darkgray"
        text="Looks like you have not added anything to you cart."
      ></Text>
      <Text
        className="text-base font-medium mb-4 text-darkgray"
        text="
                Click here to continue shopping"
      ></Text>
      <Button
        type="LongPrimaryButtonWithIcon"
        text="Continue Shopping"
        icon={<ShoppingCart />}
        onClick={() => navigate("/")}
      ></Button>
    </div>
  );
};

export default MainEmptyCart;
