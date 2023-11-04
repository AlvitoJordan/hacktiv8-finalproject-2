import React from "react";
import {Header} from "../components";
import MainAdmin from "../components/organisms/MainAdmin";

const AdminHomePage = (props) => {
  return (
    <>
      <Header title="Manage Products" />
      <MainAdmin />
    </>
  );
};

export default AdminHomePage;
