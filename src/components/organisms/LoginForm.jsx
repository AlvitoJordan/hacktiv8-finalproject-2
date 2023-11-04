import React, { useState } from "react";
import { Button, Gap, Input } from "../atoms";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [loadLogin, setLoadLogin] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const { email, password } = formLogin;
      setLoadLogin(true);
      if (email === "admin@gmail.com" && password === "admin123") {
        setTimeout(() => {
          const token = "akmsdnfydtaja3kjeq8d9";
          const role = "admin";
          const userData = { token, role };
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/dashboard");
        }, 3000);
      } else {
        setTimeout(() => {
          const token = "akmsdnfydtaja3kjeq8d9";
          const role = "user";
          const userData = { token, role };
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/user");
        }, 3000);
      }
    } catch (error) {
      throw error;
    }
  };
  const handleChange = (e) => {
    try {
      setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-[48px] text-darkgray w-[80%]">Log in to Explore Exclusive Offers</h1>
      <p className="text-[20px] w-[70%] text-darkgray mt-2">Join us by logging in to your account to unlock a world of curated products, tailored promotions, and a seamless shopping journey</p>
      <Gap className="h-[30px]" />
      <form onSubmit={handleLogin}>
        <Input placeholder="Enter Your Email" onChange={handleChange} name="email" value={formLogin.email} type="text" />
        <Gap className="h-[30px]" />
        <Input placeholder="Enter Your Password" onChange={handleChange} name="password" value={formLogin.password} type="password" />
        <Gap className="h-[30px]" />
        <Button content={`${loadLogin ? "Loading..." : "Login"} `} className="w-[70%] h-[60px] text-[32px]" />
      </form>
    </div>
  );
};

export default LoginForm;
