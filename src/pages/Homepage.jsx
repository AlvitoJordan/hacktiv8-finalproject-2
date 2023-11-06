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
    <div className="mx-4">
      <HeroSection />
      <Header title="Product" />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeProducts.map((item) => (
            <Card key={item.id} title={item.title} img={item.image} categories={item.category} price={`$ ${item.price}`} desc={item.description} id={item.id} onClick={() => handleAddToCart(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
