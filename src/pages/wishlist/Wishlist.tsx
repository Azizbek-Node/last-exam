import { useEffect, useState } from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const handleRemove = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl text-center font-bold mb-6">Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-10">
        <FaHeart className="text-6xl text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
        <Link
          to="/shop"
          className="text-blue-600 hover:underline text-lg font-semibold"
        >
          Add Now
        </Link>
      </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white p-5 shadow-md rounded-lg">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 object-contain bg-gray-100 rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="flex items-center gap-2 text-red-600"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
