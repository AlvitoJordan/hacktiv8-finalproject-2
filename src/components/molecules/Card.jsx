import React from "react";
import { Button, Text, Image } from "../atoms";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "../../assets";
import { Rating } from "@mui/material";

const Card = (props) => {
  const { title, img, categories, price, desc, id, rating, onClick } = props;

  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-box_item">
      <Image
        src={img ? img : "https://via.placeholder.com/250"}
        alt={img ? title : "No Image"}
        className={`w-full h-[150px] lg:h-[250px] rounded-t-lg ${
          img ? "object-contain" : "object-cover"
        }`}
      />
      <div className="flex flex-col justify-between">
        <div className="px-6 py-4">
          <Text type="card-category" text={categories} />
          <Text type="card-title" text={title} />
          <Text type="card-price" text={price} />
          <Text type="card-desc" text={desc} />
          <div className="flex items-center space-x-3 my-2">
            <Rating defaultValue={rating} precision={0.1} readOnly />
            <Text type="card-rating" text={rating.toFixed(1)} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-end gap-3 mt-5 px-6 pb-6">
          <Button
            type="CardPrimaryButton"
            text="Detail"
            onClick={() => handleDetail(id)}
          >
            Detail
          </Button>
          <Button
            icon={<ShoppingCart />}
            type="CardOutlineButtonWithIcon"
            text="Add to Cart"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
