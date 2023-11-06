import React from "react";
import { Header } from "../components";
import MainAdmin from "../components/organisms/MainAdmin";

const AdminHomePage = () => {
  return (
    <div>
      <Header title="Manage Products" />
      <MainAdmin />
    </div>
  );
};

export default AdminHomePage;
