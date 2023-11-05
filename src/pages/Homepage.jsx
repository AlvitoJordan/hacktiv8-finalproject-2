import { useEffect } from "react";
import { Header, Card } from "../components/molecules";
import { HeroSection } from "../components/organisms";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../redux/fetch/Get";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cart/Cart";

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
    if (user?.token) {
      dispatch(addToCart({ ...data, quantity: 1 }));
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="mx-4">
      <HeroSection />
      <Header title="Product" />
      <div className="grid grid-cols-4 gap-4">
        {product.map((item) => (
          <Card key={item.id} title={item.title} img={item.image} categories={item.category} price={`$ ${item.price}`} desc={item.description} id={item.id} onClick={() => handleCart(item)} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
