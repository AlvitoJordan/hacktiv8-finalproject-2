import React from "react";
import { Line, Text } from "../atoms";

const CartHeader = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-[2fr_0.1fr_1fr_1fr_1fr_0.1fr] items-center justify-center px-5 my-2">
          <Text className="font-medium text-lg text-darkgray" text="Product" />
          <div></div>
          <Text
            className="text-center font-medium text-lg text-darkgray"
            text="Quantity"
          />
          <Text
            className="text-center font-medium text-lg text-darkgray"
            text="Price"
          />
          <Text
            className="text-center font-medium text-lg text-darkgray"
            text="Total"
          />
          <div></div>
        </div>
        <Line className="border-b border-[1px] border-lightgray w-full mb-4" />
      </div>
    </>
  );
};

export default CartHeader;
