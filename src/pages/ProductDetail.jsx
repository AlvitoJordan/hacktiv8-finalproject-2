import React, { useEffect, useState } from "react";
import { Button, Image, NumberInput, Text, Warning } from "../components";
import { Rating, ShoppingCart } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { getAPIActById } from "../redux/fetch/Get";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cart/Cart";

const ProductDetail = () => {
  const { id } = useParams();
  const [inputNumber, setInputNumber] = useState(1);
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
    const user = JSON.parse(localStorage.getItem("userData"));
    const productToCart = { ...detailProduct, quantity: inputNumber };
    if (user?.role === "user") {
      if (inputNumber > detailProduct.stock) {
        setError(<Warning message="Stock not enough" />);
      } else {
        dispatch(addToCart(productToCart));
        navigate("/cart");
      }
    } else if (user?.role === "admin") {
      setError("Admin is not allowed to buy");
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
                  <Text className="text-darkgray font-semibold text-lg mt-1" text={detailProduct.rating?.rate} />
                </div>
                <Text className="text-2xl font-semibold my-4 text-darkgray" text={`$ ${detailProduct.price}`} />
                <Text className="text-base font-medium my-4 text-grayCS" text={detailProduct.description} />
                <div className="flex flex-row gap-5 items-center mt-5 mb-2">
                  <NumberInput value={inputNumber} onChange={(val) => setInputNumber(val)} />
                  <Text className="text-darkgray font-semibold" text={`Stock : ${detailProduct.stock}`} />
                </div>
                <p className="text-red-500 mb-8">{error}</p>
                <Button type="submit" TypeButton="ButtonPrimaryWithIcon" icon={<ShoppingCart />} className="text-white font-semibold" onClick={handleCart}>
                  Add to cart
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
