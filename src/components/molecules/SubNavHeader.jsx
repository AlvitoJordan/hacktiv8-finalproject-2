import React from "react";
import { Line, Text } from "../atoms";

const SubNavHeader = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center justify-center px-5 my-2">
        <Text className="font-medium text-lg text-darkgray" text="Product" />
        <Text className="text-center font-medium text-lg text-darkgray" text="Status" />
        <Text className="text-center font-medium text-lg text-darkgray" text="Price" />
        <Text className="text-center font-medium text-lg text-darkgray" text="Stock" />
        <Text className="text-center font-medium text-lg text-darkgray" text="Action" />
      </div>
      <Line className="border-b border-[1px] border-lightgray w-full" />
    </>
  );
};

export default SubNavHeader;
