import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ProductDetailSkeleton from "./Product_detail_skeleton";

interface Review {
  rating: number;
  comment: string;
  reviewerName: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  stock: number;
  category: string;
  reviews: Review[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.images[0]);
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        setIsInWishlist(wishlist.some((item: Product) => item.id === data.id));
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const toggleWishlist = () => {
    if (!product) return;
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const updatedWishlist = isInWishlist
      ? wishlist.filter((item: Product) => item.id !== product.id)
      : [...wishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setIsInWishlist(!isInWishlist);
  };

  const updateQuantity = (type: "increase" | "decrease") => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  if (isLoading) return <ProductDetailSkeleton />;
  if (!product) return <p className="text-center py-10">Product not found</p>;

  return (
    <div className="container mx-auto py-20 px-4 flex flex-col lg:flex-row gap-10 justify-center">
      <div className="flex flex-col w-full lg:w-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-4">
          {/* Thumbnail Images */}
          <div className="flex lg:flex-col gap-2 order-2 lg:order-1 w-full lg:w-auto justify-center lg:justify-start">
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                alt="Product Thumbnail"
                className={`w-16 h-16 object-cover cursor-pointer border rounded-md transition-opacity hover:opacity-100 ${
                  selectedImage === img
                    ? "opacity-100 border-2 border-gray-600"
                    : "opacity-50"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          {/* Main Image */}
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-80 h-80 object-contain border border-gray-300 rounded-md order-1 lg:order-2"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>
        <div className="flex items-center justify-center sm:justify-start mt-2">
          <span className="text-yellow-500 text-xl sm:text-2xl">
            {renderStars(product.rating)}
          </span>
          <p className="text-gray-600 ml-2">
            ({product.reviews.length} Reviews)
          </p>
          <span className="text-green-600 ml-2">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <p className="text-red-500 text-2xl font-bold mt-4">
          ${(product.price * quantity).toFixed(2)}
        </p>
        <p className="text-gray-600 mt-4">{product.description}</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center border rounded-md px-4 py-2">
            <button
              className="text-2xl font-bold px-3"
              onClick={() => updateQuantity("decrease")}
            >
              -
            </button>
            <span className="px-4 text-2xl">{quantity}</span>
            <button
              className="text-2xl font-bold px-3"
              onClick={() => updateQuantity("increase")}
            >
              +
            </button>
          </div>
          <button className="bg-red-500 text-white px-12 py-3 rounded-md w-full sm:w-auto hover:bg-red-600 transition">
            Buy Now
          </button>
          <button
            className="border px-4 py-3 rounded-md hover:bg-gray-200 transition"
            onClick={toggleWishlist}
          >
            {isInWishlist ? (
              <FaHeart className="text-2xl text-red-500" />
            ) : (
              <FaRegHeart className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
