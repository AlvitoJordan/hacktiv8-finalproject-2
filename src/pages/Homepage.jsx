import { Header, Card } from "../components/molecules";
import { HeroSection } from "../components/organisms";

const Homepage = () => {
  return (
    <div className="mx-4">
      <HeroSection />
      <Header title="Product" />
      <div className="grid grid-cols-4 gap-4">
        <Card title="Iphone" img="https://via.placeholder.com/600/92c952" categories="HP & Desktop" price="Rp.10000" desc="Ini Desc" />
        <Card title="Iphone" img="" categories="HP & Desktop" price="Rp.10000" desc="Ini Desc" />
        <Card title="Iphone" img="" categories="HP & Desktop" price="Rp.10000" desc="Ini Desc" />
        <Card title="Iphone" img="" categories="HP & Desktop" price="Rp.10000" desc="Ini Desc" />
        <Card title="Iphone" img="" categories="HP & Desktop" price="Rp.10000" desc="Ini Desc" />
        <Card title="Iphone" img="" categories="HP & Desktop" price="Rp.10000" desc="Ini Desc" />
        <Card title="Iphone" img="" categories="HP & Desktop" price="Rp.10000" desc="Ini Desc" />
        <Card title="Iphone" img="" categories="HP & Desktop" price="Rp.10000" desc="Ini Desc" />
      </div>
    </div>
  );
};

export default Homepage;
