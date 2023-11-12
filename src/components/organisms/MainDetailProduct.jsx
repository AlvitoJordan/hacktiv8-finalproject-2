import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { NumberInput, Warning } from "../molecules";
import { addToCart } from "../../redux/cart/Cart";
import { Button, Image, Text } from "../atoms";
import { ShoppingCart } from "../../assets";
import { getAPIAct } from "../../redux/fetch/Get";
import { Rating } from "@mui/material";

const Mainproducts = () => {
  const { id } = useParams();
  const [inputNumber, setInputNumber] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getAPI);

  useEffect(() => {
    const fetchData = async () => {
      if (products.length === 0) {
        await dispatch(getAPIAct(`https://fakestoreapi.com/products`));
      }
    };

    fetchData();
  }, [dispatch, products]);

  const getProductbyId = products.find((item) => String(item.id) === id);

  const handleCart = () => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const productToCart = { ...getProductbyId, quantity: inputNumber };
    if (user?.role === "user") {
      if (inputNumber > getProductbyId.stock) {
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
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between w-full items-center">
          {getProductbyId ? (
            <>
              <div className="flex justify-center lg:w-2/4">
                <Image
                  src={getProductbyId.image}
                  alt={getProductbyId.title}
                  className="rounded-lg w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-contain"
                />
              </div>
              <div className="lg:px-5 py-5 lg:w-2/4">
                <Text
                  className="font-bold text-2xl lg:text-5xl text-darkgray"
                  text={getProductbyId.title}
                />
                <div className="flex flex-row gap-3 items-center text-yellow mt-2">
                  <div className="flex items-center space-x-3 my-2">
                    <Rating
                      defaultValue={getProductbyId.rating?.rate}
                      precision={0.1}
                      readOnly
                    />
                    <Text
                      className="text-darkgray font-semibold text-lg mt-1"
                      text={getProductbyId.rating?.rate}
                    />
                  </div>
                </div>
                <Text
                  className="text-2xl font-semibold my-4 text-darkgray"
                  text={`$ ${getProductbyId.price}`}
                />
                <Text
                  className="text-base font-medium my-4 text-grayCS"
                  text={getProductbyId.description}
                />
                <div className="flex flex-row gap-3 lg:gap-5 items-center mt-5 mb-2">
                  <NumberInput
                    value={inputNumber}
                    onChange={(val) => setInputNumber(val)}
                  />
                  <Text
                    className="text-darkgray font-semibold"
                    text={`Stock : ${getProductbyId.stock}`}
                  />
                </div>
                <p className="text-red-500 mb-8">{error}</p>
                <Button
                  type="LongPrimaryButtonWithIcon"
                  icon={<ShoppingCart />}
                  onClick={handleCart}
                  text="Add to Cart"
                />
              </div>
            </>
          ) : (
            <div className="flex-1 px-4 lg:px-10 py-5 flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-10 w-10 border-y-4 border-primary"></div>
                <span className="text-4xl font-medium text-primary">
                  Loading...
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Mainproducts;
