import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const updateQuantity = (id: number, type: "increase" | "decrease") => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
          }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Narxni to'g'ri hisoblash uchun quantity va price ni tekshiramiz
  const totalPrice = cart.reduce((acc, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 1);
    return acc + itemTotal;
  }, 0);
  useEffect(()=>{
      window.scrollTo(0,0);
    },[])

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <FaShoppingCart className="text-6xl text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
          <Link
            to="/shop"
            className="text-blue-600 hover:underline text-lg font-semibold"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center mb-6 border-b pb-6">
              {/* Left: Product Image */}
              <img
                src={item.images && item.images.length > 0 ? item.images[0] : ""}
                alt={item.title}
                className="w-40 h-40 object-contain mb-4 sm:mb-0 sm:mr-6 border rounded-md"
              />

              {/* Right: Product Details */}
              <div className="flex flex-col w-full">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-red-500 font-bold text-lg">
                  ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-3">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4 text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 mt-3 flex items-center hover:underline"
                >
                  <FaTrash className="mr-1" /> Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right font-semibold text-lg mt-6">
            Total: <span className="text-red-500">${totalPrice.toFixed(2)}</span>
          </div>


          {/* Checkout Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-md mt-4 hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
