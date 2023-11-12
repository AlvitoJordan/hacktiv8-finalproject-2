import React from "react";
import { Home, NotFound } from "../../assets";
import { Button, Text } from "../atoms";
import { useNavigate } from "react-router-dom";

const Main404 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <NotFound />
      <Text
        className="font-bold text-5xl mt-5 text-darkgray"
        text="404!"
      ></Text>
      <Text
        className="text-base font-medium my-4 text-darkgray"
        text="Something Error"
      ></Text>
      <Button
        type="LongPrimaryButtonWithIcon"
        text="Back to HomePage"
        icon={<Home />}
        onClick={() => navigate("/")}
      ></Button>
    </div>
  );
};

export default Main404;
