import React from "react";
import { SearchBar, Logo, NavMenu } from "../molecules";

const NavBar = () => {
  const getUserDataFromLocalStorage = () => {
    const getUser = localStorage.getItem("userData");
    return getUser ? JSON.parse(getUser) : {};
  };
  const { role } = getUserDataFromLocalStorage();

  return (
    <>
      <nav className="fixed z-10 h-16 bg-white flex items-center justify-center w-full px-5 py-3 border-b-2 border-lightgray top-0">
        <div className="w-full lg:w-1/2 flex items-center justify-start">
          <Logo />
          {role === "admin" ? (
            <></>
          ) : (
            <div className="w-full lg:w-1/2 relative mx-6">
              <SearchBar />
            </div>
          )}
        </div>
        <div className="w-fit lg:w-1/2 flex items-center justify-end">
          <NavMenu />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
