import React from "react";
import { Button, Text } from "../atoms";
import { DeleteIcon, ICWarning } from "../../assets";
import NumberInput from "./NumberInput";
import SideProduct from "./SideProduct";

const CartContent = (props) => {
  const {
    img,
    title,
    categories,
    price,
    total,
    value,
    onChange,
    deleteProduct,
    active,
  } = props;
  return (
    <>
      <div
        className={`grid grid-cols-[2fr_0.1fr_1fr_1fr_1fr_0.1fr] items-center justify-center border p-5 rounded-md border-lightgray my-2  max-[768px]:flex max-[768px]:flex-col max-[768px]:items-start max-[768px]:relative ${active === false ? "" : "border-red-600 "
          }`}
      >
        <SideProduct image={img} title={title} categories={categories} />
        <div className=" flex justify-center items-center relative hover:before:content-['Quantity_not_met_!'] hover:before:absolute hover:before:mt-4 hover:before:top-6 max-[768px]:hover:before:right-3 hover:before:z-10 hover:before:bg-[#FCF5E5] hover:before:w-[224px] hover:before:h-[45px] hover:before:flex hover:before:justify-center hover:before:items-center gap-2 hover:before:text-[#E6BA71] hover:before:rounded-[8px] hover:before:border-[#E6BA71] hover:before:border-[3px] max-[768px]:absolute max-[768px]:top-[100px] right-4 ">
          {active === false ? "" : <ICWarning />}{" "}
        </div>
        <NumberInput value={value} onChange={onChange} />
        <div className="max-[768px]:w-[75%] max-[768px]:mt-2">
          <Text
            className="text-center font-medium text-lg  text-darkgray"
            text={price}
          />
        </div>
        <div className="max-[768px]:absolute max-[768px]:bottom-5 max-[768px]: right-4">
          <Text
            type="dolar"
            className="text-center font-medium text-lg text-darkgray"
            text={total}
          />
        </div>
        <div className="flex items-center justify-end max-[768px]:absolute max-[768px]:top-4 max-[768px]:right-4">
          <Button
            type="IconButton"
            onClick={deleteProduct}
            icon={<DeleteIcon />}
          />
        </div>
      </div>
    </>
  );
};

export default CartContent;
