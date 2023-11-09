import React from "react";
import SubNav from "../molecules/SubNav";
import SubNavHeader from "../molecules/SubNavHeader";
import SubNavContent from "../molecules/SubNavContent";
import { Header } from "../molecules";

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
