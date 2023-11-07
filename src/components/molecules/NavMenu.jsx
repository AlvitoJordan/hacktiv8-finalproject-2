import React, { useState } from "react";
import { HamburgerIcon } from "../../assets";
import { Links, Button } from "../atoms";
import { useNavigate, useLocation } from "react-router-dom";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

  const toogleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <div className="flex items-center">
      <ul className="flex-col hidden pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex">
        <li className="flex items-center">
          <Links
            to="/"
            className={`mx-5 px-2 font-semibold text-darkgray hover:text-secondary ${
              pathname === "/" ? "text-primary" : ""
            }`}
          >
            Home
          </Links>
        </li>
        <li className="flex items-center">
          {role === "admin" ? (
            <Links
              to="/rekap"
              className={`mx-5 px-2 font-semibold text-darkgray hover:text-secondary ${
                pathname === "/rekap" ? "text-primary" : ""
              }`}
            >
              Rekap Penjualan
            </Links>
          ) : (
            role === "user" && (
              <>
                <Links
                  to="/cart"
                  className={`mx-5 px-2 font-semibold text-darkgray hover:text-secondary ${
                    pathname === "/cart" ? "text-primary" : ""
                  }`}
                >
                  Cart
                </Links>
              </>
            )
          )}
        </li>
        <li className="flex items-center">
          {token ? (
            <Button
              className="ml-5 hover:bg-secondary bg-white border-2 font-semibold text-primary rounded-lg hover:text-vanilla hover:border-secondary py-2 px-10"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Links
              to="/login"
              className="ml-5 hover:bg-secondary bg-primary text-white rounded-lg hover:text-vanilla hover:bg-secondary py-2 px-10 font-semibold border-2 border-primary hover:border-transparent"
            >
              Login
            </Links>
          )}
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
                {role === "user" ? (
                  <>
                    <Links
                      to="/cart"
                      className="mx-5 px-2 font-semibold text-darkgray"
                    >
                      Cart
                    </Links>
                  </>
                ) : (
                  <>
                    <Links
                      to="/rekap"
                      className="mx-5 px-2 font-semibold text-darkgray"
                    >
                      Rekap Penjualan
                    </Links>
                  </>
                )}
              </li>
              <li className="flex flex-col">
                {token ? (
                  <Button className="hover:bg-primary hover:rounded-b-md hover:text-vanilla block py-2 px-10 border-t-2">
                    Logout
                  </Button>
                ) : (
                  <Links
                    to="/login"
                    className="hover:bg-primary hover:rounded-b-md hover:text-vanilla block py-2 px-10 border-t-2"
                  >
                    Login
                  </Links>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
