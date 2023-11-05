import React from "react";
import { Button, Text } from "../components";
import { EmptyCart, ShoppingCart } from "../assets";
import { useNavigate } from "react-router-dom";

const NoItems = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[545px] flex flex-col items-center justify-center">
      <EmptyCart />
      <Text className="font-bold text-5xl mt-5 text-darkgray" text="You cart is currenty empty!"></Text>
      <Text className="text-base font-medium mt-4 text-darkgray" text="Looks like you have not added anything to you cart."></Text>
      <Text
        className="text-base font-medium mb-4 text-darkgray"
        text="
              Click here to continue shopping"
      ></Text>
      <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow">
        <div className="flex flex-row px-5 items-center" onClick={() => navigate("/")}>
          <ShoppingCart />
          <Text className="ml-3" text="Continue Shopping" />
        </div>
      </Button>
    </div>
  );
};

export default NoItems;
