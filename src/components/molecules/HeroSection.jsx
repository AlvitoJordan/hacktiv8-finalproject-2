import React from "react";
import { ILProduct } from "../../assets";
import { Button, Text } from "../atoms";
import Swal from "sweetalert2";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse justify-between items-center lg:flex-row w-full ">
      <div className="lg:w-1/2 flex flex-col">
        <Text
          className="font-bold text-3xl lg:text-5xl text-darkgray my-7 lg:w-[80%]"
          text="E-Commerce Futurist: Digital Revolution"
        ></Text>
        <Text
          className="text-base lg:text-2xl  w-full text-grayCS lg:w-[90%]"
          text="Unlock the potential of your e-commerce venture with our cutting-edge
          solutions. Our platform empowers you to harness the full force of the
          digital landscape, driving unprecedented growth and success."
        ></Text>
        <div className="flex flex-row my-10 space-x-4">
          <Button
            TypeButton="ButtonPrimary"
            className="text-white py-2 px-6 text-base lg:text-2xl font-semibold hover:bg-secondary hover:border-secondary hover:text-white"
            onClick={() =>
              Swal.fire({
                title: "Welcome to Bukapedia!",
                text: "Find various other interesting products here!",
                confirmButtonText: "OK",
                customClass: {
                  confirmButton:
                    "font-semibold px-6 py-2 hover:bg-secondary bg-primary text-white rounded-lg",
                },
                buttonsStyling: false,
              })
            }
          >
            Explore
          </Button>
          <Button
            TypeButton="ButtonPrimary"
            className="border-2 border-primary bg-white text-primary py-2 px-6 text-base lg:text-2xl font-semibold hover:bg-secondary hover:text-white hover:border-secondary"
            onClick={() =>
              Swal.fire({
                title: "Learn more!",
                text: "Further information regarding the product can be found on the product details page",
                icon: "info",
                confirmButtonText: "OK",
                customClass: {
                  confirmButton:
                    "font-semibold px-6 py-2 hover:bg-secondary bg-primary text-white rounded-lg",
                },
                buttonsStyling: false,
              })
            }
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
