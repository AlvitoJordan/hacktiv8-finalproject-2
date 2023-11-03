import Bukapedia from "./assets/Bukapedia.svg";
import { Provider } from "react-redux";
import Router from "./router";
import store from "./redux/store";
import React, { useState } from "react";

import NavBar from "./components/organisms/NavBar";
import { SearchBar } from "./components/molecules";
import { Button, Input } from "./components/atoms";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <NavBar />
    <nav className="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-8xl lg:px-4 border-b-2">
      <div className="flex items-center">
        <div className="flex items-center justify-between">
          <a href="/" className="flex">
            <img src={Bukapedia} alt="logo" className="h-8 mr-3" />
            <span className="hidden md:flex self-center text-2xl font-semibold whitespace-nowrap dark:text-black logo">Bukapedia</span>
          </a>
        </div>
        <div className="ml-2 md:ml-6 md:flex">
          <div className="w-[300px] md:w-[345px] relative">
            <Input type="search" placeholder="Cari Barang ..." />
            <Button type="btn-iconOnly" content="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex-col hidden pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex">
          <li className="mx-5 px-2 font-semibold text-darkgray">
            <a href="/">Home</a>
          </li>
          <li className="mx-5 px-2 font-semibold text-darkgray">
            <a href="/">Cart</a>
          </li>
        </ul>
        <a href="/" className="hidden lg:inline-flex items-center bg-primary hover:bg-secondary text-vanilla font-semibold py-2 px-8 border-2 border-transparent rounded-md shadow ml-5">
          Login
        </a>
      </div>
      <div className="lg:hidden relative">
        <button onClick={toogleDropdown} className="text-primary hover:text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-14 right-0 bg-white border rounded-md border-gray-300 shadow-md mt-2">
            <ul className="flex flex-col">
              <li>
                <a href="/" className="hover:bg-primary hover:rounded-t-md hover:text-vanilla block py-2 px-10">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:bg-primary hover:text-vanilla block py-2 px-10">
                  Cart
                </a>
              </li>
              <li>
                <a href="/" className="hover:bg-primary hover:rounded-b-md hover:text-vanilla block py-2 px-10 border-t-2">
                  Login
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
<>
  <Provider store={store}>
    <NavBar />
    <Router />
  </Provider>
</>;

export default App;
