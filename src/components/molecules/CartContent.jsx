import React from "react";
import { Text } from "../atoms";
import { DeleteIcon, ICWarning } from "../../assets";
import NumberInput from "./NumberInput";
import SideProduct from "./SideProduct";

const CartContent = (props) => {
  const { img, title, categories, price, total, value,onChange, deleteProduct, active } = props;
  return (
    <>
      <div className={`grid grid-cols-[2fr_0.1fr_1fr_1fr_1fr_0.1fr] items-center justify-center border p-5 rounded-md border-lightgray my-2 ${active === false ? "" : "border-red-600 "}`}>
        <SideProduct image={img} title={title} categories={categories} />
        <div className=" flex justify-center items-center relative hover:before:content-['Quantity_not_met'] hover:before:absolute hover:before:mt-4 hover:before:top-6 hover:before:bg-[#FCF5E5] hover:before:w-[224px] hover:before:h-[45px] hover:before:flex hover:before:justify-center hover:before:items-center gap-2 hover:before:text-[#E6BA71] hover:before:rounded-[8px] hover:before:border-[3px]">
          {active === false ? "" : <ICWarning />}{" "}
        </div>
        <NumberInput value={value}  onChange={onChange} />
        <div>
          <Text className="text-center font-medium text-lg text-darkgray" text={price} />
        </div>
        <div>
          <Text type="dolar" className="text-center font-medium text-lg text-darkgray" text={total} />
        </div>
        <div className="flex items-center justify-end">
          <button onClick={deleteProduct}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartContent;
