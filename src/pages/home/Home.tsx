import React from "react";
import Hero from "./Hero";
import Products from "@/components/products/Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
};

export default React.memo(Home);
