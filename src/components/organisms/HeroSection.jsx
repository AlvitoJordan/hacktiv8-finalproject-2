import React from "react";
import { ILProduct } from "../../assets";
import { Button } from "../atoms";
import Swal from "sweetalert2";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse justify-between items-center lg:flex-row w-full ">
      <div className="lg:w-1/2 flex flex-col">
        <h1 className="font-bold text-3xl lg:text-5xl text-darkgray my-7 lg:w-[80%]">E-Commerce Futurist: Digital Revolution</h1>
        <p className="text-base lg:text-2xl  w-full text-gray lg:w-[90%]">
          Unlock the potential of your e-commerce venture with our cutting-edge solutions. Our platform empowers you to harness the full force of the digital landscape, driving unprecedented growth and success.
        </p>
        <div className="flex flex-row my-10 space-x-4">
          <Button TypeButton="ButtonPrimary" className="text-white py-2 px-6 text-base lg:text-2xl font-semibold hover:bg-secondary hover:border-secondary hover:text-white" onClick={() => Swal.fire("Welcome!")}>
            Explore
          </Button>
          <Button
            TypeButton="ButtonPrimary"
            className="border-2 bg-white text-primary py-2 px-6 text-base lg:text-2xl font-semibold hover:bg-secondary hover:text-white hover:border-secondary"
            onClick={() => Swal.fire("Bukapedia adalah sebuah website yang digunakan untuk proses jual beli produk secara online.")}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:p-10">
        <ILProduct className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
