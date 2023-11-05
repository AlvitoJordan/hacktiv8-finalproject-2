import React, { useState } from "react";
import { Button, Gap, Input } from "../atoms";

const LoginForm = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const { email, password } = formLogin;
      setIsLoading(true);

      if (email.length < 5 || password.length < 5) {
        setError({
          email: email.length < 5 ? "Email must be at least 5 characters" : "",
          password: password.length < 5 ? "Password must be at least 5 characters" : "",
        });
        setIsLoading(false);
        return;
      }

      setTimeout(() => {
        const token = "akmsdnfydtaja3kjeq8d9";
        const role = email === "admin@gmail.com" && password === "admin123" ? "admin" : "user";
        const userData = { token, role };
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.replace(role === "admin" ? "/dashboard" : "/cart");
      }, 2000);
    } catch (error) {
      throw error;
    }
  };
  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setFormLogin({ ...formLogin, [name]: value });

      if (value.length > 5) {
        setError({ ...error, [name]: "" });
      }
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
        <Input placeholder="Enter Your Email" onChange={handleChange} name="email" value={formLogin.email} type="email" />
        <p className="text-red-500">{error.email}</p>
        <Gap className="h-[30px]" />
        <Input placeholder="Enter Your Password" onChange={handleChange} name="password" value={formLogin.password} type="password" />
        <p className="text-red-500">{error.password}</p>
        <Gap className="h-[30px]" />
        <Button className="w-[70%] h-[60px] text-[32px] bg-primary text-white rounded-lg">{`${isLoading ? "Loading..." : "Login"} `}</Button>
      </form>
    </div>
  );
};

export default LoginForm;
