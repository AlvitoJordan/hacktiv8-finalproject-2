import React from "react";
import { Line } from "../atoms";

const Header = (props) => {
  const { title } = props;
  return (
    <>
      <h1 className="font-bold text-[50px] text-darkgray">{title}</h1>
      <Line className="border-b border-[3px] border-lightgray w-full mb-10"/>
    </>
  );
};

export default Header;
