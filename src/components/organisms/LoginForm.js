import React from "react";
import { Button, Gap, Input } from "../atoms";

const LoginForm = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-[48px] text-darkgray w-[80%]">Log in to Explore Exclusive Offers</h1>
      <p className="text-[20px] w-[70%] text-darkgray mt-2">Join us by logging in to your account to unlock a world of curated products, tailored promotions, and a seamless shopping journey</p>
      <Gap className="h-[30px]" />
      <Input placeholder="Email" />
      <Gap className="h-[30px]" />
      <Input placeholder="Password" />
      <Gap className="h-[30px]" />
      <Button content="Login" className="w-[70%] h-[60px] text-[32px]" />
    </div>
  );
};

export default LoginForm;
