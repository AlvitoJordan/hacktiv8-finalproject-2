import React, { useEffect } from "react";
import { ILLogin } from "../assets";
import { LoginForm } from "../components/";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkUserAndRedirect = () => {
      const user = JSON.parse(localStorage.getItem("userData"));
      if (user?.role === "admin") {
        navigate("/dashboard");
      } else if (user?.role === "user") {
        navigate("/cart");
      }
    };
    checkUserAndRedirect();
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
