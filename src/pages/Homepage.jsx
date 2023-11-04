import { useEffect, useState } from "react";
import { Header, Card } from "../components/molecules";
import { HeroSection } from "../components/organisms";

const Homepage = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="mx-4">
      <HeroSection />
      <Header title="Product" />
      <div className="grid grid-cols-4 gap-4">
        {product.map((item) => (
          <Card key={item.id} title={item.title} img={item.image} categories={item.category} price={`$ ${item.price}`} desc={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
