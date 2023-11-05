import React from "react";
import { Line, Links } from "../atoms";

const SubNav = () => {
  return (
    <>
      <nav className="w-full bg-white font-semibold text-darkgray">
        <ul className="flex space-x-6">
          <Links to="/" className=" hover:text-secondary bg-primary text-white px-4 py-4">
            All Product
          </Links>
          <Links to="/" className=" hover:text-secondary px-4 py-4">
            Availabled
          </Links>
          <Links to="/" className=" hover:text-secondary px-4 py-4">
            Disabled
          </Links>
        </ul>
      </nav>
      <Line className="border border-primary border-b-[3px]" />
    </>
  );
};

export default SubNav;
