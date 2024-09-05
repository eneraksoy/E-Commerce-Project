import WhatWeDo from "@/components/WhatWeDo.";
import BestSeller from "../components/BestSeller";
import Brands from "../components/Brands";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import BestServices from "@/components/BestServicex";
import FeaturedPosts from "@/components/FeaturedPosts";

const HomePage = () => {
  return (
    <div className=" ">
      <Hero />
      <Brands />
      <ProductCard />
      <BestSeller />
      <WhatWeDo />
      <BestServices />
      <FeaturedPosts />
    </div>
  );
};

export default HomePage;
