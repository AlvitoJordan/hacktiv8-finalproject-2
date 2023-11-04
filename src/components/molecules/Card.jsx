import React from "react";
import { Button, Text, Image } from "../atoms";

const Card = (props) => {
  const { title, img, categories, price, desc } = props;
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-box_item h-[600px]">
      {img ? <Image src={img} alt={title} className="w-full h-[250px] rounded-t-lg object-cover" /> : <Image src="https://via.placeholder.com/250" alt="NoImage" className="w-full h-[250px] rounded-t-lg object-cover"></Image>}
      <div className="flex flex-col justify-between h-[350px]">
        <div className="px-6 py-4">
          <Text className="font-medium text-sm text-secondary mb-2" text={categories} />
          <Text className="font-medium text-lg text-darkgray" text={title} maxLength="60" />
          <Text className="font-semibold text-lg text-darkgray mb-3" text={price} />
          <Text className="font-medium text-gray text-sm" text={desc} maxLength="60" />
        </div>
        <div className="flex flex-row justify-end gap-3 mt-6 px-6 pt-4 pb-8">
          <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-3 border-2 border-transparent rounded-md shadow ml-5">Detail</Button>
          <Button className="bg-white hover:bg-secondary hover:border-transparent hover:text-white text-primary font-semibold py-2 px-3 border-[3px] border-primary rounded-md shadow">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
