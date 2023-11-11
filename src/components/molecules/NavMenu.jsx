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
            className={`mx-5 px-2 font-semibold text-darkgray hover:text-secondary whitespace-nowrap ${
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
              className={`mx-5 px-2 font-semibold text-darkgray hover:text-secondary whitespace-nowrap ${
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
                  className={`mx-5 px-2 font-semibold text-darkgray hover:text-secondary whitespace-nowrap ${
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
              type="NavigationOutlineBorderButton"
              text="Logout"
              onClick={handleLogout}
            />
          ) : (
            <Button to="/login" type="LinkPrimaryButton" text="Login" />
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
          <div className="w-[250px] absolute top-14 right-0 bg-white border rounded-md border-gray-300 shadow-md">
            <ul className="flex flex-col items-center">
              <li className="flex items-center">
                <Links
                  to="/"
                  className={`mx-5 px-2 py-2 font-semibold text-darkgray hover:text-secondary whitespace-nowrap ${
                    pathname === "/" ? "text-primary" : ""
                  }`}
                >
                  Home
                </Links>
              </li>
              <li className="flex items-center">
                {role === "admin" ? (
                  <>
                    <Links
                      to="/rekap"
                      className={`mx-5 px-2 py-2 font-semibold text-darkgray hover:text-secondary whitespace-nowrap ${
                        pathname === "/rekap" ? "text-primary" : ""
                      }`}
                    >
                      Rekap Penjualan
                    </Links>
                  </>
                ) : (
                  <>
                    <Links
                      to="/cart"
                      className={`mx-5 px-2 py-2 font-semibold text-darkgray hover:text-secondary whitespace-nowrap ${
                        pathname === "/cart" ? "text-primary" : ""
                      }`}
                    >
                      Cart
                    </Links>
                  </>
                )}
              </li>
              <li className="flex flex-col">
                {token ? (
                  <Button
                    className={
                      "mx-5 px-2 my-2 font-semibold text-darkgray hover:text-secondary whitespace-nowrap"
                    }
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                ) : (
                  <Links
                    to="/login"
                    className={`mx-5 px-2 py-2 font-semibold text-darkgray hover:text-secondary whitespace-nowrap ${
                      pathname === "/login" ? "text-primary" : ""
                    }`}
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
