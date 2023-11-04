import React from "react";
import { CartContent, CartHeader, Header } from "../components/molecules";
import { Button, Text } from "../components";
import { BackIcon } from "../assets";

const CartPage = () => {
  return (
    <div className="mx-4">
      <Header title="Shopping Cart" />
      <CartHeader />
      <CartContent img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
      <CartContent img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
      <CartContent img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
      <CartContent img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
      <CartContent img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
      <div class="flex gap-20 justify-end items-center my-10">
        <Text className="text-darkgray font-semibold text-3xl" text="Total" />
        <Text className="text-darkgray font-semibold text-3xl" text="$400.00" />
      </div>
      <div className="flex flex-row justify-between mt-6 pt-4 pb-4">
        <Button className="bg-white hover:bg-secondary hover:border-transparent hover:text-white text-primary font-semibold py-2 px-3 border-[3px] border-primary rounded-md shadow">
          <div className="flex flex-row px-5">
            <BackIcon className="hover:text-white" />
            <Text className="ml-3" text="Continue Shopping" />
          </div>
        </Button>
        <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow">Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
