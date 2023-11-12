import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { NumberInput, Warning } from "../molecules";
import { addToCart } from "../../redux/cart/Cart";
import { Button, Image, Text } from "../atoms";
import { Rating, ShoppingCart } from "../../assets";

const Mainproducts = () => {
  const { id } = useParams();
  const [inputNumber, setInputNumber] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getAPI);

  useEffect(() => {
    const fetchProductById = async () => {
      const product = products[id - 1];
      return product;
    };
    fetchProductById();
  }, [id, products]);

  const handleCart = () => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const productToCart = { ...products[id - 1], quantity: inputNumber };
    if (user?.role === "user") {
      if (inputNumber > products[id - 1].stock) {
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
        <div className="flex justify-between w-full items-center max-[768px]:flex-col max-[768px]:relative">
          {products[id - 1] !== null && (
            <>
              <div className="flex justify-center w-2/4 max-[768px]:w-full">
                <Image
                  src={products[id - 1].image}
                  alt={products[id - 1].title}
                  className="rounded-lg w-[500px] h-[500px] object-contain"
                />
              </div>
              <div className="px-5 py-5 w-2/4 max-[768px]:w-full">
                <Text
                  className="font-bold text-5xl text-darkgray max-[768px]:text-2xl"
                  text={products[id - 1].title}
                />
                <div className="flex flex-row gap-3 items-center text-yellow mt-2">
                  <Rating />
                  <Text
                    className="text-darkgray font-semibold text-lg mt-1"
                    text={products[id - 1].rating?.rate}
                  />
                </div>
                <Text
                  className="text-2xl font-semibold my-4 text-darkgray"
                  text={`$ ${products[id - 1].price}`}
                />
                <Text
                  className="text-base font-medium my-4 text-grayCS"
                  text={products[id - 1].description}
                />
                <div className="flex flex-row gap-5 items-center mt-5 mb-2 max-[768px]:h-[100px] max-[768px]:relative ">
                  <div className="max-[768px]:absolute max-[768px]:left-0">
                    <NumberInput
                      value={inputNumber}
                      onChange={(val) => setInputNumber(val)}
                    />
                  </div>
                  <Text
                    className="text-darkgray font-semibold max-[768px]:absolute max-[768px]:left-5 max-[768px]:top-0"
                    text={`Stock : ${products[id - 1].stock}`}
                  />
                </div>
                <p className="text-red-500 mb-8 max-[768px]:absolute max-[768px]:left-5 max-[768px]:bottom-[-50px] max-[768px]:z-10">{error}</p>
                <div className="max-[768px]:absolute max-[768px]:right-0 max-[768px]:bottom-1">
                  <Button
                    type="LongPrimaryButtonWithIcon"
                    icon={<ShoppingCart />}
                    onClick={handleCart}
                    text="Add to Cart"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Mainproducts;
