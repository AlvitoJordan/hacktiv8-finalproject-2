import React from "react";
import { Text } from "../atoms";
import { DeleteIcon } from "../../assets";
import NumberInput from "./NumberInput";
import SideProduct from "./SideProduct";

const CartContent = (props) => {
    const {img, title, categories, price, total} =props
  return (
    <>
      <div className="grid grid-cols-[2fr_0.1fr_1fr_1fr_1fr_0.1fr] items-center justify-center border p-5 rounded-md border-lightgray border-2 my-2">
        <SideProduct img={img} title={title} categories={categories} />
        <div></div>
        <NumberInput />
        <div>
          <Text
            className="text-center font-medium text-lg text-darkgray"
            text={price}
          />
        </div>
        <div>
          <Text
            className="text-center font-medium text-lg text-darkgray"
            text={total}
          />
        </div>
        <div className="flex items-center justify-end">
          <button>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartContent;
