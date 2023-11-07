import React from "react";
import { Button, Text, Image } from "../atoms";
import { useNavigate } from "react-router-dom";
import { Rating } from "../../assets";

const Card = (props) => {
  const { title, img, categories, price, desc, id, rating, onClick } = props;

  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="mx-2 lg:mx-0 rounded-lg overflow-hidden shadow-box_item h-[480px] lg:h-[560px]">
      {img ? (
        <Image
          src={img}
          alt={title}
          className="w-full h-[150px] lg:h-[250px] rounded-t-lg object-contain"
        />
      ) : (
        <Image
          src="https://via.placeholder.com/250"
          alt="NoImage"
          className="w-full h-[250px] rounded-t-lg object-cover"
        ></Image>
      )}
      <div className="flex flex-col justify-between h-[330px] lg:h-[325px]">
        <div className="px-6 py-4">
          <Text
            className="font-normal bg-secondary text-xs lg:text-xs text-white py-1 px-2 mb-2 inline-block rounded-md "
            text={categories}
          />
          <Text
            className="font-semibold text-lg text-darkgray"
            text={title}
            maxLength="25"
          />
          <Text
            className="font-semibold text-md lg:text-lg text-darkgray mb-3"
            text={price}
          />

          <Text
            className="font-medium text-gray text-sm"
            text={desc}
            maxLength="60"
          />
          <div className="flex flex-row gap-1 mt-2">
            <Rating />
            <Text
              className="text-darkgray mt-1 text-xs lg:text-sm font-semibold text-lg"
              text={rating}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-end gap-3 mt-2 px-6 pt-2 pb-8">
          <Button
            className="bg-primary border-primary text-white py-2 px-3 text-sm lg:text-base rounded-lg font-semibold hover:bg-secondary hover:text-white"
            onClick={() => handleDetail(id)}
          >
            Detail
          </Button>
          <Button
            className="border-2 text-primary py-2 px-3 text-sm lg:text-base rounded-lg font-semibold hover:bg-secondary hover:text-white hover:border-secondary"
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
