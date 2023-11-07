import React from "react";
import { SearchBar, Logo, NavMenu } from "../molecules";

const NavBar = () => {
  return (
    <nav className="fixed z-10 bg-white flex items-center justify-center w-full px-5 py-3 border-b-2 border-lightgray top-0">
      <div className="w-1/2 flex items-center justify-start">
        <Logo />
        <div className="w-full relative mx-6">
          <SearchBar />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <NavMenu />
      </div>
    </nav>
  );
};

export default NavBar;
