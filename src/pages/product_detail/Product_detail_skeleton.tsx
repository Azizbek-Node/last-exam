const ProductDetailSkeleton = () => {
  return (
    <div className="container mx-auto py-10 px-4 flex flex-col lg:flex-row gap-10 justify-center">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex sm:flex-col gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-16 sm:w-28 h-16 sm:h-28 bg-gray-300 rounded-md animate-pulse"
            ></div>
          ))}
        </div>
        <div className="w-72 sm:w-96 h-72 sm:h-96 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      <div className="w-full lg:w-1/2 text-center sm:text-left">
        <div className="h-8 w-3/4 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="h-6 w-1/2 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="h-6 w-1/4 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="h-24 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="h-12 w-full sm:w-2/3 bg-gray-300 animate-pulse rounded mb-4"></div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
