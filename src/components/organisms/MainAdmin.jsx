import React from "react";
import { Header, SubNav, SubNavHeader, SubNavContent } from "../molecules";

const MainAdmin = () => {
  return (
    <div>
      <Header title="Manage Products" />
      <div className="border rounded-md border-lightgray border-x-[3px] border-t-[3px]">
        <SubNav />

        <SubNavHeader />
        <SubNavContent />
      </div>
    </div>
  );
};

export default MainAdmin;
