import React, { useEffect, useState } from "react";
import { Button, Image, NumberInput, Text } from "../components";
import { Rating, ShoppingCart } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { getAPIActById } from "../redux/fetch/Get";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cart/Cart";

const ProductDetail = () => {
  const { id } = useParams();
  const [inputNumber, setinputNumber] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { detailProduct } = useSelector((state) => state.getAPI);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAPIActById(id));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, id]);

  const handleCart = () => {
    const getUser = localStorage.getItem("userData");
    const user = JSON.parse(getUser);
    const dataToCart = { ...detailProduct, quantity: inputNumber };
    if (user?.token) {
      if (inputNumber > detailProduct.stock) {
        setError("Stock not enough");
      } else {
        dispatch(addToCart(dataToCart));
        navigate("/cart");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="w-full min-h-[545px] mt-10">
        <div className="flex justify-between w-full items-center">
          {detailProduct !== null && (
            <>
              <div className="flex justify-center w-2/4">
                <Image src={detailProduct.image} alt={detailProduct.title} className="rounded-lg w-[500px] h-[500px]" />
              </div>
              <div className="px-5 w-2/4">
                <Text className="font-bold text-5xl text-darkgray" text={detailProduct.title} />
                <div className="flex flex-row gap-3 items-center text-yellow mt-2">
                  <Rating />
                  <Text className="text-darkgray font-semibold text-lg" text={detailProduct.rating?.rate} />
                </div>
                <Text className="text-xl font-semibold my-4 text-darkgray" text={`$ ${detailProduct.price}`} />
                <Text className="text-base font-medium my-4 text-darkgray" text={detailProduct.description} />
                <div className="flex flex-row gap-5 items-center mt-5 mb-2">
                  <NumberInput value={inputNumber} onChange={(val) => setinputNumber(val)} />
                  <Text className="text-darkgray font-semibold" text={`Stock : ${detailProduct.stock}`} />
                </div>
                <p className="text-red-500 mb-8">{error}</p>
                <Button type="submit" className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow" onClick={handleCart}>
                  <div className="flex flex-row px-5 items-center">
                    <ShoppingCart />
                    <Text className="ml-3" text="Add to Cart" />
                  </div>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
