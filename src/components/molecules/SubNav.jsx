import React from "react";
import { Line, Links } from "../atoms";
import { useLocation } from "react-router-dom";

const SubNav = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="w-full bg-white font-semibold text-darkgray">
        <ul className="flex space-x-6">
          <Links to="/dashboard" className={`hover:text-secondary  px-4 py-4 ${pathname === "/dashboard" && "bg-primary text-white"}`}>
            All Product
          </Links>
          <Links to="/dashboard/availabled" className={`hover:text-secondary  px-4 py-4 ${pathname === "/dashboard/availabled" && "bg-primary text-white"}`}>
            Availabled
          </Links>
          <Links to="/dashboard/disabled" className={`hover:text-secondary  px-4 py-4 ${pathname === "/dashboard/disabled" && "bg-primary text-white"}`}>
            Disabled
          </Links>
        </ul>
      </nav>
      <Line className="border border-primary border-b-[3px]" />
    </>
  );
};

export default SubNav;
