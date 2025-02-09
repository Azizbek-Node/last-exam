import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaRegHeart,
  FaRegUser,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 776);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 776);
    };
    window.addEventListener("resize", handleResize);

    // Foydalanuvchi login bo‘lganligini tekshirish
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Reklama */}
      <div className="bg-black text-white text-sm text-center py-2">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-bold underline cursor-pointer">Shop Now</span>
      </div>

      {/* Navbar katta ekran uchun */}
      <nav className="hidden md:flex items-center justify-around px-6 py-4 bg-white border-b">
        <NavLink to="/" className="text-2xl font-bold">
          Exclusive
        </NavLink>

        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <NavLink to="/" className="hover:text-gray-900">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="hover:text-gray-900">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-900">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-900">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="relative w-40 sm:w-48 md:w-60 lg:w-72">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 rounded-md bg-gray-100 outline-none"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
          </div>
          <NavLink to="/wishlist">
            <FaRegHeart className="text-black hover:text-gray-800 cursor-pointer" />
          </NavLink>
          <NavLink to="/cart">
            <FaShoppingCart className="text-black hover:text-gray-900 cursor-pointer" />
          </NavLink>
          <NavLink to={isAuthenticated ? "/auth/profile" : "/auth/sign-in"}>
            {isAuthenticated ? (
              <FaUserCircle className="text-black hover:text-gray-900 cursor-pointer" />
            ) : (
              <FaRegUser className="text-black hover:text-gray-900 cursor-pointer" />
            )}
          </NavLink>
        </div>
      </nav>


      {/* Mobil versiya uchun pastda ikonlar react-iconda bunday interfeysda yoqligi uchun foydalanmadim*/}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2">
          <NavLink to="/" className="flex flex-col items-center">
            <span className="text-xl">🏠</span>
            <span className="text-xs">Home</span>
          </NavLink>
          <NavLink to="/shop" className="flex flex-col items-center">
            <span className="text-xl">🛍</span>
            <span className="text-xs">Shop</span>
          </NavLink>
          <NavLink to="/wishlist" className="flex flex-col items-center">
            <span className="text-xl">❤️</span>
            <span className="text-xs">Favourites</span>
          </NavLink>
          <NavLink to="/cart" className="flex flex-col items-center">
            <span className="text-xl">🛒</span>
            <span className="text-xs">Cart</span>
          </NavLink>
          <NavLink to={isAuthenticated ? "/auth/profile" : "/auth/sign-in"} className="flex flex-col items-center">
            <span className="text-xl">👤</span>
            <span className="text-xs">Profile</span>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
