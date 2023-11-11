import React from "react";
import { Button, Skeleton, Text } from "../atoms";
import { Card, Header } from "../molecules";
import Swal from "sweetalert2";
import { addToCart } from "../../redux/cart/Cart";
import { getAPIAct } from "../../redux/fetch/Get";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Home, SearchNotFound } from "../../assets";

const MainSearchPage = () => {
  const { products } = useSelector((state) => state.getAPI);
  const { searchProduct } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      if (products.length === 0) {
        dispatch(getAPIAct(`https://fakestoreapi.com/products`));
      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchProducts();

  const searchingProduct = products.filter(
    (item) =>
      item.title.toLowerCase().includes(searchProduct.toLowerCase()) &&
      item.status === "active"
  );

  console.log(searchingProduct);

  const handleAddToCart = (data) => {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user?.role === "user") {
      dispatch(addToCart({ ...data, quantity: 1 }));
      navigate("/cart");
    } else if (user?.role === "admin") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Admin not allowed to buy",
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full">
      <Header title={`Searching for : ${searchProduct}`} />
      <div className="flex items-center justify-center">
        {searchingProduct.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchingProduct.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                img={item.image}
                categories={item.category}
                price={`$ ${item.price}`}
                rating={item.rating.rate}
                desc={item.description}
                id={item.id}
                onClick={() => handleAddToCart(item)}
              />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <SearchNotFound />
            <Text
              className="font-bold text-5xl mt-5 text-darkgray"
              text="Oops, Product not found!"
            ></Text>
            <Text
              className="text-base font-medium my-4 text-darkgray"
              text="
                      Try other keyword"
            ></Text>
            <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow">
              <div
                className="flex flex-row px-5 items-center"
                onClick={() => navigate("/")}
              >
                <Home />
                <Text className="ml-3" text="Back to Home" />
              </div>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSearchPage;
