import React, { useState } from "react";
import { HamburgerIcon } from "../../assets";
import { Links, Button } from "../atoms";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center">
      <ul className="flex-col hidden pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex">
        <li className="flex items-center">
          <Links to="/" className="mx-5 px-2 font-semibold text-darkgray">
            Home
          </Links>
        </li>
        <li className="flex items-center">
          <Links to="/cart" className="mx-5 px-2 font-semibold text-darkgray">
            Cart
          </Links>
        </li>
        <li className="flex items-center">
          <Links
            to="/login"
            className="hidden lg:inline-flex bg-primary hover:bg-secondary text-vanilla font-semibold py-2 px-8 border-2 border-transparent rounded-md shadow ml-5"
          >
            Login
          </Links>
        </li>
      </ul>
      <div className="lg:hidden relative flex items-center">
        <Button
          onClick={toogleDropdown}
          className="text-primary hover:text-secondary"
        >
          <HamburgerIcon />
        </Button>

        {isOpen && (
          <div className="absolute top-14 right-0 bg-white border rounded-md border-gray-300 shadow-md mt-2">
            <ul>
              <li className="flex flex-col">
                <Links
                  to="/"
                  className="hover:bg-primary hover:rounded-t-md hover:text-vanilla block py-2 px-10"
                >
                  Home
                </Links>
              </li>
              <li className="flex flex-col">
                <Links
                  to="/cart"
                  className="hover:bg-primary hover:text-vanilla block py-2 px-10"
                >
                  Cart
                </Links>
              </li>
              <li className="flex flex-col">
                <Links
                  to="/login"
                  className="hover:bg-primary hover:rounded-b-md hover:text-vanilla block py-2 px-10 border-t-2"
                >
                  Login
                </Links>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
