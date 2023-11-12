import React from "react";
import { Line, Links } from "../atoms";
import { useLocation } from "react-router-dom";

const SubNav = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="w-full bg-white font-semibold text-darkgray">
        <ul className="flex space-x-6">
          <Links to="/" className={`hover:text-secondary  px-4 py-4 max-[768px]:text-[15px] ${pathname === "/" && "bg-primary text-white"}`}>
            All Product
          </Links>
          <Links to="/availabled" className={`hover:text-secondary  px-4 py-4 max-[768px]:text-[15px] ${pathname === "/availabled" && "bg-primary text-white"}`}>
            Availabled
          </Links>
          <Links to="/disabled" className={`hover:text-secondary  px-4 py-4 max-[768px]:text-[15px] ${pathname === "/disabled" && "bg-primary text-white"}`}>
            Disabled
          </Links>
        </ul>
      </nav>
      <Line className="border border-primary border-b-[3px]" />
    </>
  );
};

export default SubNav;
