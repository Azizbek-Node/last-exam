import React, { useEffect } from "react";
import Products from "../../components/products/Products";

const Shop = () => {
  useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
    <div className="container mx-auto py-10 px-4">
      <Products />
    </div>
  );
};

export default React.memo(Shop);
