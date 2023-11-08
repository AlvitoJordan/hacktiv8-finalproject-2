import { useEffect } from "react";
import {
  Header,
  Card,
  Skeleton,
  AdminHomePage,
  HeroSection,
} from "../components/";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../redux/fetch/Get";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cart/Cart";
import Swal from "sweetalert2";
import { Rating } from "../assets";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.getAPI);
  const activeProducts = products.filter((item) => item.status === "active");

  useEffect(() => {
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
  }, [dispatch, products.length]);

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
  const renderRatingIcons = (rate) => {
    const icons = [];
    for (let i = 0; i < rate; i++) {
      icons.push(<Rating key={i} />);
    }
    return icons;
  };
  return (
    <div>
      {role === "admin" && token ? (
        <AdminHomePage />
      ) : (
        <>
          <HeroSection />
          <Header title="Product" />

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
                    IconRate={renderRatingIcons(item.rating.rate)}
                    onClick={() => handleAddToCart(item)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center space-x-3 w-full">
                <Skeleton type="Card" />
                <Skeleton type="Card" />
                <Skeleton type="Card" />
                <Skeleton type="Card" />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
