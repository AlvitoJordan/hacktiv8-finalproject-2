import React from "react";
import { ILProduct } from "../../assets";
import { Button } from "../atoms";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse justify-between items-center lg:flex-row w-full">
      <div className="lg:w-1/2 flex flex-col lg:p-10">
        <h1 className="font-bold text-2xl lg:text-5xl text-darkgray my-7">E-Commerce Futurist: Digital Revolution</h1>
        <p className="text-base lg:text-2xl w-full text-gray">
          Unlock the potential of your e-commerce venture with our cutting-edge solutions. Our platform empowers you to harness the full force of the digital landscape, driving unprecedented growth and success.
        </p>
        <div className="flex flex-row my-10 space-x-4">
          <Button className="border-2 border-primary bg-primary text-white py-2 px-6 text-base lg:text-2xl rounded-lg font-semibold hover:bg-secondary hover:border-secondary hover:text-white">Explore</Button>
          <Button className="border-2 text-primary py-2 px-6 text-base lg:text-2xl rounded-lg font-semibold hover:bg-secondary hover:text-white hover:border-secondary">Learn More</Button>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:p-10">
        <ILProduct className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
