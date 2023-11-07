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
    <div className="flex justify-between w-full items-center px-[170px]">
      <div>
        <LoginForm />
      </div>
      <div className="flex items-center justify-center">
        <ILLogin />
      </div>
    </div>
  );
};

export default LoginPage;
