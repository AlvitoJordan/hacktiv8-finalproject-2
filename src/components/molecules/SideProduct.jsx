import React from "react";
import { Image, Text } from "../atoms";

const SideProduct = (props) => {
  const { title, categories, image } = props;
  return (
    <div className="flex flex-row items-center max-[768px]:items-start">
      <Image
        src={image}
        alt="image"
        className="min-w-[80px] max-w-[80px] h-[80px] rounded-lg object-contain"
      />
      <div className="ml-4 w-[160px] max-[768px]:w-48 ">
        <Text type="card-title" text={title} />
        <Text
          className="font-medium text-sm text-secondary mb-2"
          text={categories}
        />
      </div>
    </div>
  );
};

export default SideProduct;
