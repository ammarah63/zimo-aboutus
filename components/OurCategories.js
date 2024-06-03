import React, { useState } from "react";
import Image from "next/image";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
import pic0 from "../public/images/Rectangle 9440.svg";
import pic01 from "../public/images/Rectangle 94401.svg";
import pic1 from "../public/images/Rectangle 9442.svg";
import pic2 from "../public/images/Component 1 – 1.svg";
import pic3 from "../public/images/Rectangle 9441.svg";
import pic4 from "../public/images/Rectangle 944.svg";
import pic5 from "../public/images/Rectangle 9446.svg";
import pic6 from "../public/images/Rectangle 9447.svg";

const OurCategories = () => {
  const images = [
    { src: pic0, text: "DIAMONDS" },
    { src: pic01, text: "PRIVATE ISLANDS" },
    { src: pic1, text: "REAL ESTATE" },
    { src: pic2, text: "CARS" },
    { src: pic3, text: "YACHTS" },
    { src: pic4, text: "WATCHES" },
    { src: pic5, text: "JETS" },
    { src: pic6, text: "TRAVEL THE WORLD" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="OurCategoriesSection" className="bg-white bg-center h-screen p-10 flex justify-center items-center">
      <div>
        <div className="flex">
          <p
            className="text-2xl tracking-widest my-1"
            data-aos="fade-right"
            data-aos-once="true"
          >
            OUR CATEGORIES
          </p>
          <div className="flex ml-auto">
            <button onClick={handlePrev}>
              <PiCaretLeftThin size={40} className="me-5" />
            </button>
            <button onClick={handleNext}>
              <PiCaretRightThin size={40} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 lg:gap-4 mt-12">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <div key={index} className="relative">
              <div className="flex items-end justify-center relative">
                <Image
                  src={image.src}
                  width={100}
                  height={100}
                  className="min-h-10 lg:min-h-fullmin-32 md:min-h-48 min-w-[20vw] "
                />
                {/* lg:min-w-64 */}
              </div>
              <div class="absolute inset-0 bg-gray-700 opacity-60"></div>
              <div className="absolute inset-0 flex items-end justify-center">
                <p
                  className="text-white text-xs lg:text-base-50 !-mt-96 lg:py-2"
                  data-aos="fade-up"
                >
                  {image.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 lg:mt-14">
          <p
            className="text-center lg:text-3xl text:lg tracking-widest"
            data-aos="fade-up"
            data-aos-once="true"
          >
            ONE PLATFORM FOR ALL PREMIUM LISTINGS
          </p>
        </div>
        <div>
          <p
            className="text-center lg:text-2xl text-base  mt-7 lg:mt-14 tracking-widest"
            data-aos="fade-up"
            data-aos-once="true"
          >
            UNLIMITED POTENTIAL
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCategories;
