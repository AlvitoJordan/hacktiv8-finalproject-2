import React from "react";
import { Button, Text, Image } from "../atoms";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { title, img, categories, price, desc, id, onClick} = props;

  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-box_item h-[600px]">
      {img ? (
        <Image
          src={img}
          alt={title}
          className="w-full h-[250px] rounded-t-lg object-contain"
        />
      ) : (
        <Image
          src="https://via.placeholder.com/250"
          alt="NoImage"
          className="w-full h-[250px] rounded-t-lg object-cover"
        ></Image>
      )}
      <div className="flex flex-col justify-between h-[350px]">
        <div className="px-6 py-4">
          <Text
            className="font-normal bg-secondary text-xs text-white py-1 px-2 mb-2 inline-block rounded-md "
            text={categories}
          />
          <Text
            className="font-medium text-lg text-darkgray"
            text={title}
            maxLength="35"
          />
          <Text
            className="font-semibold text-lg text-darkgray mb-3"
            text={price}
          />
          
          <Text
            className="font-medium text-gray text-sm"
            text={desc}
            maxLength="60"
          />
        </div>
        <div className="flex flex-row justify-end gap-3 mt-6 px-6 pt-4 pb-8">
          <Button
            className="bg-primary text-white py-2 px-3 text-base rounded-lg font-semibold hover:bg-secondary hover:text-white"
            onClick={() => handleDetail(id)}
          >
            Detail
          </Button>
          <Button
            className="border-2 text-primary py-2 px-3 text-base rounded-lg font-semibold hover:bg-secondary hover:text-white"
            onClick={onClick}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
