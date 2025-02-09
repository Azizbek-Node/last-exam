const SkeletonProducts = () => {
  return (
    <div className="py-4 px-5 rounded-lg shadow-md hover:shadow-lg transition relative animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
      <div className="w-2/3 h-6 bg-gray-300 rounded-md mb-2"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default SkeletonProducts;
