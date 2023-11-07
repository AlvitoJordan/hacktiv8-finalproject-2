import React from "react";
import { Header } from "..";
import MainAdmin from "../organisms/MainAdmin";

const AdminHomePage = () => {
  return (
    <div>
      <Header title="Manage Products" />
      <MainAdmin />
    </div>
  );
};

export default AdminHomePage;
