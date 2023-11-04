import React from "react";
import { ILProduct } from "../../assets";
import { Button } from "../atoms";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="w-2/4 flex flex-col">
        <h1 className="font-bold text-[3.1rem] text-darkgray">E-Commerce Futurist: Digital Revolution</h1>
        <p className="text-[24px] w-[90%] mt-5">
          Unlock the potential of your e-commerce venture with our cutting-edge solutions. Our platform empowers you to harness the full force of the digital landscape, driving unprecedented growth and success.
        </p>
        <div className="mt-9 space-x-4">
          <Button className="bg-primary text-white py-2 px-6 text-[24px] rounded-xl font-medium">Explore</Button>
          <Button className="border-2 text-primary py-2 px-6 text-[24px] rounded-xl font-medium hover:bg-secondary hover:text-white">Learn More</Button>
        </div>
      </div>
      <div className="w-2/4 flex justify-center">
        <ILProduct className="w-[80%]" />
      </div>
    </div>
  );
};

export default HeroSection;
