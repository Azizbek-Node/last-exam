import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FooterSkeleton from "../../skleton/FooterSkeleton/FooterSkeleton";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay, BsQrCode } from "react-icons/bs";

const Footer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50);
  }, []);

  if (isLoading) {
    return <FooterSkeleton />;
  }

  return (
    <footer className="w-full bg-black py-16">
      <div className="container mx-auto grid sm-grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Exclusive Section */}
        <div className="space-y-5">
          <h2 className="text-5xl font-extrabold text-white">Exclusive</h2>
          <p className="text-white text-lg">Subscribe</p>
          <p className="text-gray-400">Get 10% off your first order</p>
          <form className="flex items-center bg-black border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-gray-300 bg-black focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-4 py-3 bg-primary text-white">→</button>
          </form>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
          <nav className="text-gray-400 space-y-2">
            <p>111 Bijoy Sarani, Dhaka, Bangladesh</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </nav>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Account</h3>
          <nav className="flex flex-col space-y-2 text-gray-400">
            <NavLink to="/" className="hover:text-white">
              My Account
            </NavLink>
            <NavLink to="/register" className="hover:text-white">
              Login / Register
            </NavLink>
            <NavLink to="/cart" className="hover:text-white">
              Cart
            </NavLink>
            <NavLink to="/wishlist" className="hover:text-white">
              Wishlist
            </NavLink>
            <NavLink to="/shop" className="hover:text-white">
              Shop
            </NavLink>
          </nav>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Link</h3>
          <nav className="flex flex-col space-y-2 text-gray-400">
            <NavLink to="/privacy" className="hover:text-white">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-white">
              Terms of Use
            </NavLink>
            <NavLink to="/faq" className="hover:text-white">
              FAQ
            </NavLink>
            <NavLink to="/contact" className="hover:text-white">
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Download App
          </h3>
          <p className="text-gray-400">Save $3 with App New User</p>
          <div className="flex items-center space-x-6 mt-3">
            <BsQrCode className="text-gray-400 text-8xl hover:text-white transition duration-300" />
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-300"
              >
                <AiFillApple className="text-2xl" />
                <span>App Store</span>
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-300"
              >
                <BsGooglePlay className="text-2xl" />
                <span>Google Play</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-5 text-gray-400 text-xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto border-t border-gray-600 pt-6 text-center text-gray-500 text-sm">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
