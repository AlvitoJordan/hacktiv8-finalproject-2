import React from "react";
import { ILProduct } from "../../assets";
import { Button, Text } from "../atoms";
import Swal from "sweetalert2";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse justify-between items-center lg:flex-row w-full ">
      <div className="lg:w-1/2 flex flex-col">
        <Text
          type="hero-header"
          text="E-Commerce Futurist: Digital Revolution"
          subText="Unlock the potential of your e-commerce venture with our cutting-edge
          solutions. Our platform empowers you to harness the full force of the
          digital landscape, driving unprecedented growth and success."
        />
        <div className="flex flex-row my-10 space-x-4">
          <Button
            type="PrimaryButton"
            text="Explore"
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
          />
          <Button
            type="OutlineBorderButton"
            text="Learn More"
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
          />
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:p-10">
        <ILProduct className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
