import { FaApple } from "react-icons/fa";
import heroImg from "@/assets/images/heroimg.png";

const Hero = () => {
  return (
    <div className="container mx-auto py-12 sm:py-16">
      <div className="bg-black px-10 py-8 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg sm:px-10 sm:py-16">
        {/* Chap taraf (Matn qismi) */}
        <div className="md:w-1/2 flex flex-col gap-6 sm:gap-8 text-center md:text-left">
          {/* Logo va matn qismi */}
          <div className="flex flex-col items-center md:items-start text-white gap-4 sm:gap-6">
            {/* Apple Logo va Matn */}
            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <FaApple className="w-12 sm:w-14 md:w-16 lg:w-20" />
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                iPhone 14 Series
              </p>
            </div>

            {/* Sarlavha */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-snug lg:leading-normal font-montserrat text-center md:text-left">
              Up to 10% off Voucher
            </h1>

            {/* Tugma */}
            <button className="text-white border border-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-4 text-xs sm:text-sm md:text-base rounded-md transition-all duration-300 hover:bg-white hover:text-black w-[140px] sm:w-[160px] md:w-[180px] mx-auto md:mx-0">
              Shop Now
            </button>
          </div>
        </div>

        {/* O'ng taraf (iPhone rasmi) */}
        <div className="md:w-1/2 flex justify-center mt-6 sm:mt-8 md:mt-0">
          <img
            src={heroImg}
            alt="iPhone"
            className="w-full sm:w-60 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
