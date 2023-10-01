import Activities from "./activities";
import BestDeals from "./best-deals";
import Bucket from "./bucket";
import CategoryPage from "./category";
import Coupon from "./coupon";
import CustomerSlider from "./customer-slider";
import Deals from "./deals";
import Explore from "./explore";
import Hero from "./hero";
import Services from "./services";
import Staycation from "./staycation";
import TopStaycation from "./top-staycation";

const Home = () => {
  return (
    <>
      <Hero />
      <Deals />
      <Staycation />
      <Explore />
      <CategoryPage />
      <Activities />
      <BestDeals />
      <Bucket />
      <CustomerSlider />
      <TopStaycation />
      <Services />
      <Coupon />
    </>
  );
};

export default Home;
