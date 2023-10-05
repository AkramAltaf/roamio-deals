import CategoryPage from "./category";
import Coupon from "./coupon";
import CustomerSlider from "./customer-slider";
import Deals from "./deals";
import Explore from "./explore";
import Hero from "./hero";
import Services from "./services";
import TopStaycation from "./top-staycation";

const Home = () => {
  return (
    <>
      <Hero />
      <Deals />
      <Explore />
      <CategoryPage />
      <CustomerSlider />
      <TopStaycation />
      <Services />
      <Coupon />
    </>
  );
};

export default Home;
