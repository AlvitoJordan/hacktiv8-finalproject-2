import { useEffect } from "react";
import { Header, Card } from "../components/molecules";
import { HeroSection } from "../components/organisms";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../redux/fetch/Get";

const Homepage = () => {

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.getAPI);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      dispatch(getAPIAct(`https://fakestoreapi.com/products`));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="mx-4">
      <HeroSection />
      <Header title="Product" />
      <div className="grid grid-cols-4 gap-4">
        {product.map((item) => (
          <Card key={item.id} title={item.title} img={item.image} categories={item.category} price={`$ ${item.price}`} desc={item.description} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
