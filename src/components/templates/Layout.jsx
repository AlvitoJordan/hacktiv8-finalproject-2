import React from "react";
import { NavBar } from "../organisms";
import { Footer } from "../molecules";
import { Gap } from "../atoms";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col ">
        <Gap className="bg-white flex items-center justify-center w-full h-16 px-5 py-3 border-b-2 border-lightgray top-0" />
        <main className="flex-1 px-4 lg:px-10 py-5 flex items-center justify-center">
          {children}
        </main>
        <Footer
          copyright="© 2023 Hacktiv8. All Rights Reserved"
          text="MSIB Kampus Merdeka"
        />
      </div>
    </>
  );
};

export default Layout;
