import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../../redux/fetch/Get";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart/Cart";
import Swal from "sweetalert2";
import { Card, HeroSection } from "../molecules";
import { Skeleton, Text } from "../atoms";
import MainAdmin from "./MainAdmin";

const MainHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.getAPI);
  const activeProducts = products.filter((item) => item.status === "active");

  const getUserDataFromLocalStorage = () => {
    const getUser = localStorage.getItem("userData");
    return getUser ? JSON.parse(getUser) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

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

  useEffect(() => {
    const fetchProducts = () => {
      try {
        if (products.length === 0) {
          dispatch(getAPIAct(`https://fakestoreapi.com/products`));
        }
      } catch (error) {
        console.error("Error Fetching :", error);
      }
    };

    fetchProducts();
  }, [dispatch, products]);

  return (
    <div>
      {role === "admin" && token ? (
        <MainAdmin />
      ) : (
        <>
          <HeroSection />
          <Text type="header" text="Product" />
          <div className="flex items-center justify-center">
            {activeProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {activeProducts.map((item) => (
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
              <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 20 }, (_, index) => (
                  <div key={index}>
                    <Skeleton type="Card" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MainHome;
