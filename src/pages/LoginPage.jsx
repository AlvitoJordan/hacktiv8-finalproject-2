import React from "react";
import { ILLogin } from "../assets";
import { LoginForm } from "../components/";

const LoginPage = () => {
  return (
    <div className="flex px-[95px] justify-between w-full mt-[100px] items-center">
      <div className="w-2/4">
        <LoginForm />
      </div>
      <div className="w-2/4">
        <ILLogin />
      </div>
    </div>
  );
};

export default LoginPage;
