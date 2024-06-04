import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
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

  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(0);
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < images.length - itemsToShow) {
      setStartIndex(startIndex + 1);
    }
  };
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
    const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    const itemsToShow1 = isLargeScreen ? 4 : isMediumScreen ? 3 : 2;
    setItemsToShow(itemsToShow1);
  });

  return (
    <div
      id="OurCategoriesSection"
      className="bg-white bg-center h-screen p-5 flex justify-center items-center"
    >
      <div>
        <div className="flex mb-[6vh] mt-[0vh]">
          <p
            className="text-2xl tracking-widest my-1"
            data-aos="fade-right"
            data-aos-once="true"
          >
            OUR CATEGORIES
          </p>
          <div className="flex ml-auto">
            <button onClick={handlePrev} disabled={startIndex === 0}>
              <PiCaretLeftThin
                size={40}
                className={`me-5 ${startIndex === 0 ? "opacity-50" : ""}`}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= images.length - itemsToShow}
            >
              <PiCaretRightThin
                size={40}
                className={`${
                  startIndex >= images.length - itemsToShow ? "opacity-50" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`rounded-lg relative transition-transform duration-300 ${
                index >= startIndex && index < startIndex + itemsToShow
                  ? ""
                  : "hidden"
              }`}
            >
              <div className="rounded-lg flex items-end justify-center relative">
                <Image
                  src={image.src}
                  width={100}
                  height={100}
                  className="!rounded-lg  md:min-w-[28vw] min-w-[44vw] lg:min-w-[22vw]"
                />
              </div>
              <div className="absolute rounded-lg inset-0 backdrop-brightness-50 flex items-end justify-center">
                <p
                  className="text-white tracking-widest py-3 text-xs lg:text-base !-mt-96 lg:py-5"
                  data-aos="fade-up"
                >
                  {image.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <p
            className="text-center my-[4vh] lg:my-[8vh] lg:text-3xl md:text-2xl text-lg tracking-widest"
            data-aos="fade-up"
            data-aos-once="true"
          >
            ONE PLATFORM FOR ALL PREMIUM LISTINGS
          </p>
        </div>
        <div>
          <p
            className="text-center lg:text-2xl md:text-xl text-base tracking-widest"
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
