import React, { useEffect } from "react";
import { ILLogin } from "../assets";
import { LoginForm } from "../components/";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getUserFromLocal = () => {
      const userData = localStorage.getItem("userData");
      const data = JSON.parse(userData);
      if (data?.role === "admin") {
        navigate("/dashboard");
      } else if (data?.role === "user") {
        navigate("/user");
      }
    };
    getUserFromLocal();
  }, [navigate]);

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
