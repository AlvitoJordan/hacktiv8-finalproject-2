import React, { useEffect } from "react";
import { Button, Image, NumberInput, Text } from "../components";
import { Rating, ShoppingCart } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../redux/fetch/Get";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.getAPI);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      dispatch(getAPIAct(`https://fakestoreapi.com/products/${id}`));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(product)
  console.log(id)
  return (
    <>
      <div className="w-full min-h-[545px] items-center justify-center">
        <div className="flex justify-center">
          <div>
            <Image src={product.image} alt={product.title} className="rounded-lg w-[400px] h-[400px]" />
          </div>
          <div className="w-1/2 px-5">
            <Text className="font-bold text-5xl text-darkgray" text="Nama Produk"></Text>
            <div className="flex flex-row gap-3 items-center text-yellow">
              <Rating />
              <Text className="text-darkgray font-semibold text-lg" text="4.8" />
            </div>
            <Text className="text-xl font-semibold my-4 text-darkgray" text="$100.00"></Text>
            <Text
              className="text-base font-medium my-4 text-darkgray"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ></Text>
            <div className="flex flex-row gap-5 items-center mt-5 mb-10">
              <NumberInput />
              <Text className="text-darkgray font-semibold" text="Stock : 10" />
            </div>
            <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow">
              <div className="flex flex-row px-5 items-center">
                <ShoppingCart />
                <Text className="ml-3" text="Add to Cart" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
