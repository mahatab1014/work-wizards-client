import BlogForHome from "./BlogForHome/BlogForHome";
import BrowseByCategory from "./BrowseByCategory/BrowseByCategory";
import FeatureForHome from "./FeatureForHome/FeatureForHome";
import HeroSlider from "./Slider/HeroSlider";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <BrowseByCategory />
      <FeatureForHome />
      <BlogForHome />
    </>
  );
};

export default Home;
