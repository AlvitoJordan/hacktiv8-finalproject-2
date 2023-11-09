import React, { useState } from "react";
import { Button, Gap, Input } from "../atoms";
import { useNavigate } from "react-router-dom";
import { ICEmail, ICPassword } from "../../assets";

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

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
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

    if (email === "user@gmail.com" && password === "user123") {
      loginUser("user");
    } else if (email === "admin@bukapedia.com" && password === "admin123") {
      loginUser("admin");
    } else {
      setError({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });
      setIsLoading(false);
    }
  };
  const loginUser = (role) => {
    setTimeout(() => {
      const token = "akmsdnfydtaja3kjeq8d9";
      const userData = { token, role };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate(role === "admin" ? "/" : "/cart");
    }, 2000);
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
    <div className="flex flex-col py-24">
      <h1 className="font-bold text-[48px] w-[80%] text-darkgray">Log in to Explore Exclusive Offers</h1>
      <p className="text-[20px] w-[60%] text-darkgray mt-2">Join us by logging in to your account to unlock a world of curated products, tailored promotions, and a seamless shopping journey</p>
      <Gap className="h-[30px]" />
      <form onSubmit={handleLogin}>
        <Input placeholder="Enter Your Email" onChange={handleChange} name="email" value={formLogin.email} type="email" typeInput="InputWithIcon" icon={<ICEmail className="w-[30px] h-[30px]" />} />
        <p className="text-red-500">{error.email}</p>
        <Gap className="h-[30px]" />
        <Input placeholder="Enter Your Password" onChange={handleChange} name="password" value={formLogin.password} type="password" typeInput="InputWithIcon" icon={<ICPassword className="w-[30px] h-[30px]" />} />
        <p className="text-red-500">{error.password}</p>
        <Gap className="h-[30px]" />
        <Button className="w-[60%] h-[60px] text-2xl bg-primary text-white rounded-lg flex items-center justify-center">
          {isLoading ? <div className="w-[40px] h-[40px] rounded-full border-b-[2px] border-r-[2px]  border-secondary animate-spin" /> : <p>Login</p>}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
