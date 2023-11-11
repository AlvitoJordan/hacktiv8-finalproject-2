import React from "react";
import { Home, NotFound, SearchNotFound } from "../../assets";
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
        text="
                      Something Error"
      ></Text>
      <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow">
        <div
          className="flex flex-row px-5 items-center"
          onClick={() => navigate("/")}
        >
          <Home />
          <Text className="ml-3" text="Back to Home" />
        </div>
      </Button>
    </div>
  );
};

export default Main404;
