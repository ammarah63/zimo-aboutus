import React, { useEffect, useState, useRef } from "react";
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
//import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";

SwiperCore.use([Navigation]);
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
const swiperRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(0);


  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    const itemsToShow1 = isLargeScreen ? 4 : isMediumScreen ? 3 : 2;
    setItemsToShow(itemsToShow1);
  }, [isLargeScreen, isMediumScreen]);



  return (
    <div
      id="OurCategoriesSection"
      className="bg-white bg-center h-screen p-5 flex justify-center items-center"
    >
      <div className="swiper">
        <div className="flex mb-[10vh] md:mb-[6vh] md:mt-[0vh]">
          <p
            className="md:text-lg lg:text-2xl 3xl:text-4xl 4xl:text-6xl tracking-widest my-1"
            data-aos="fade-right"
            data-aos-once="true"
          >
            OUR CATEGORIES
          </p>
          <div className="flex ml-auto">
            <button onClick={() => swiperRef.current.slidePrev()}>
              <PiCaretLeftThin
                size={40}
                className={` md:h-6 md:w-6 lg:h-10 lg:w-10 4xl:h-20 4xl:w-20 me-5 ${
                  startIndex === 0 ? "" : ""
                }`}
              />
            </button>
            <button onClick={() => swiperRef.current.slideNext()}>
              <PiCaretRightThin
                size={40}
                className={`md:h-6 md:w-6 lg:h-10 lg:w-10 4xl:h-20 4xl:w-20 ${
                  startIndex >= images.length - itemsToShow ? "" : ""
                }`}
              />
            </button>
          </div>
        </div>
        {/* <div className="swiper-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4"> */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={itemsToShow || 4}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          //  ref={swiper}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className={`rounded-lg relative transition-transform duration-300 ${
                index >= startIndex && index < startIndex + itemsToShow
                  ? ""
                  : "hidden"
              } swiper-slide`}
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
                  className="text-white 3xl:text-xl 4xl:text-2xl tracking-widest py-3 text-[0.6rem] lg:text-base !-mt-96 lg:py-5"
                  data-aos="fade-up"
                >
                  {image.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="">
          <p
            className="text-center 3xl:text-5xl 4xl:text-7xl mt-[10vh] my-5 md:my-[4vh] lg:my-[8vh] lg:text-3xl md:text-lg text-base tracking-widest"
            data-aos="fade-up"
            data-aos-once="true"
          >
            ONE PLATFORM FOR ALL PREMIUM LISTINGS
          </p>
        </div>
        <div>
          <p
            className="text-center 3xl:text-3xl 4xl:text-5xl lg:text-2xl text-sm tracking-widest"
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
