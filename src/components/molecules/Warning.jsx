import React from "react";
import { ICWarning } from "../../assets";

const Warning = (props) => {
  const { message } = props;
  return (
    <div className="my-4 bg-red-100 max-w-fit space-x-2 flex flex-row justify-center items-center border-2 border-red-500 text-red-500 rounded-lg px-4 py-2">
      <ICWarning className="w-5" />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default Warning;
