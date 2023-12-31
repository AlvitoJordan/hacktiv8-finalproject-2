import React from "react";
import Links from "../atoms/Links";
import { BukaPedia } from "../../assets";

const Logo = () => {
  return (
    <div className="flex items-center justify-between">
      <Links to="/" className="flex">
        <BukaPedia className="h-6" />
        <span className="mx-2 hidden lg:flex self-center text-2xl font-semibold logo">
          Bukapedia
        </span>
      </Links>
    </div>
  );
};

export default Logo;
