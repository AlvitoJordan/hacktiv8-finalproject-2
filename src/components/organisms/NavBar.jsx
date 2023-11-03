import React from "react";
import { SearchBar, Logo, NavMenu } from "../molecules";

const NavBar = () => {
  return (
    <nav className="fixed bg-white flex items-center justify-between w-full px-3 py-3 mx-auto max-w-8xl lg:px-4 border-b-2 border-lightgray top-0">
      <div className="flex items-center">
        <Logo />
        <div className="ml-2 md:ml-6 md:flex">
          <SearchBar />
        </div>
      </div>
      <div className="flex items-center">
        <NavMenu />
      </div>
    </nav>
  );
};

export default NavBar;
