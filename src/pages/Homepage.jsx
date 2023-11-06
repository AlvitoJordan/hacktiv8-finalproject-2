import { useEffect } from "react";
import { Header, Card } from "../components/molecules";
import { HeroSection } from "../components/organisms";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../redux/fetch/Get";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cart/Cart";
import Swal from "sweetalert2";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.getAPI);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAPIAct(`https://fakestoreapi.com/products`));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);
  const handleCart = (data) => {
    const getUser = localStorage.getItem("userData");
    const user = JSON.parse(getUser);
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
    <div className="mx-4">
      <HeroSection />
      <Header title="Product" />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {product.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              img={item.image}
              categories={item.category}
              price={`$ ${item.price}`}
              desc={item.description}
              id={item.id}
              onClick={() => handleCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
