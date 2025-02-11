import { FaRegHeart, FaHeart, FaShoppingCart, FaCheck } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IProduct } from "@/types";
import { useGetProductsQuery } from "@/redux/api/product-api";

const Products: React.FC = () => {
  const { data, isLoading, isError } = useGetProductsQuery({});
  const products = data?.products || [];

  const [wishlist, setWishlist] = useState<IProduct[]>(
    JSON.parse(localStorage.getItem("wishlist") || "[]")
  );
  const [cart, setCart] = useState<IProduct[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [visibleCount, setVisibleCount] = useState(8);
  const navigate = useNavigate();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching products.</p>;

  const handleWishlistToggle = (product: IProduct) => {
    let updatedWishlist = wishlist.some((item) => item.id === product.id)
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleCartToggle = (product: IProduct) => {
    let updatedCart = cart.some((item) => item.id === product.id)
      ? cart.filter((item) => item.id !== product.id)
      : [...cart, product];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="bg-white text-black py-4 px-5 rounded-lg shadow-sm hover:shadow-lg transition relative group"
          >
            <div className="absolute top-3 right-3 flex flex-col gap-3">
              {wishlist.some((item) => item.id === product.id) ? (
                <FaHeart
                  className="text-2xl cursor-pointer text-red-500"
                  onClick={() => handleWishlistToggle(product)}
                />
              ) : (
                <FaRegHeart
                  className="text-2xl cursor-pointer text-gray-500"
                  onClick={() => handleWishlistToggle(product)}
                />
              )}
              <FaRegEye
                className="text-2xl cursor-pointer text-gray-500"
                onClick={() => navigate(`/product/${product.id}`)}
              />
            </div>

            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-40 object-contain cursor-pointer"
            />

            <h3 className="text-lg font-semibold mt-3 truncate">
              {product.title}
            </h3>
            <p className="text-[#DB4444] font-bold">${product.price}</p>

            <div className="relative">
              {cart.some((item) => item.id === product.id) ? (
                <button
                  onClick={() => handleCartToggle(product)}
                  className="w-full py-2 mt-3 bg-gray-600 text-white rounded-md transition flex items-center justify-center gap-2"
                >
                  <FaCheck className="text-xl" /> Added to Cart
                </button>
              ) : (
                <button
                  onClick={() => handleCartToggle(product)}
                  className="w-full py-2 mt-3 bg-black text-white rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100"
                >
                  <FaShoppingCart className="text-xl" /> Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
