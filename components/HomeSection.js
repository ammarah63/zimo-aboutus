import { useEffect, useState } from "react";
import Image from "next/image";
import logo1 from "../public/images/Group 3055.svg";
import logo from "../public/images/Group 3385.svg";
import logo2 from "../public/images/Group 3005.svg";
import { PiArrowLeftThin } from "react-icons/pi";
import { PiCaretDownThin } from "react-icons/pi";
import { LiaUser } from "react-icons/lia";
import { PiBagLight } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSection = ({ locationData }) => {
  function getDate() {
    const today = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const date = today.getDate();
    const day = days[today.getDay()];
    return `${day}, ${date} ${month}  ${year}`;
  }

  function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }
  //:${seconds < 10 ? `0${seconds}` : seconds}
  const [currentDate, setCurrentDate] = useState(getDate());
  const [currentTime, setCurrentTime] = useState(getTime());
  const [location, setLocation] = useState({
    city: "",
    country: "",
    countryCode: "",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLocation({
      city: locationData.city,
      country: locationData.country,
      countryCode: locationData.countryCode,
    });
  }, []);

  let myInterval;

  const handleScroll = () => {
    const nextSection = document.getElementById("realStateSection");
    if (nextSection) {
      clearInterval(myInterval);

      const targetY = nextSection.getBoundingClientRect().top + window.scrollY;
      const startingY = window.scrollY;
      const distance = targetY - startingY;
      let currentTime = 0;
      const duration = 1000;

      function animateScroll() {
        currentTime += 10;
        const easeInOutCubic = currentTime / duration;
        const eased =
          easeInOutCubic < 0.5
            ? 4 * Math.pow(easeInOutCubic, 3)
            : 1 - Math.pow(-2 * easeInOutCubic + 2, 3) / 2;

        const newY = startingY + distance * eased;
        window.scrollTo(0, newY);

        if (currentTime < duration) {
          setTimeout(animateScroll, 10);
        }
      }

      animateScroll();
    }
  };
  myInterval = setInterval(() => {}, 1000);

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/2023-01-19_22-48-19.svg')",
        }}
        className=" bg-cover bg-center relative h-screen min-h-screen lg:p-3 2xl:p-7 text-white"
      >
        <div className="grid grid-cols-6 ">
          <div className="ml-3 lg:ml-0 lg:flex md:flex col-span-2 mt-3 md:h-14 lg:mt-4">
            <div className="flex order-2 lg:order-2 md:order-2 ">
              <div className="pe-1 lg:px-2">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  className="max-w-10 md:min-w-10 lg:min-w-32 4xl:min-w-52"
                />
              </div>
              <div className="xl:mt-auto hidden md:block">
                <p className="lg:text-sm 4xl:text-2xl 4xl:mb-3 xl:-mt-9 md:mt-2 text-xs mt-2 lg:mb-4 lg:ms-3">
                  ABOUT
                </p>
              </div>
            </div>
            <div className="order-1 md:order-1 lg:order-1 mt-3 md:mt-0 lg:mt-0">
              <Image
                src={logo1}
                width={50}
                className="max-w-8 lg:min-w-14 lg:mx-5 my-auto md:mx-2 4xl:min-w-20"
              />
            </div>
          </div>

          <div className="flex lg:items-center justify-center col-span-2">
            <Image
              src={logo2}
              width={100}
              height={100}
              className="-mt-5 md:mb-16 min-w-20 md:min-h-12 lg:min-w-40 lg:mt-3 4xl:min-w-72"
            />
          </div>
          <div className="flex ml-auto col-span-2 flex-col lg:flex-row md:h-14 lg:items-center">
            <div className="flex order-1 md:mt-3 mt-1 -ms-14 me-3 lg:me-8 lg:my-3 lg:mt-5  lg:order-1">
              <div>
                {mounted && (
                  <p className="flex text-[0.5rem] 3xl:text-sm 4xl:text-base text-white tracking-widest text-nowrap uppercase">
                    <span className="hidden md:block"> {currentTime}</span>
                    {location.city}, {location.country}
                  </p>
                )}
                <p className="flex text-[0.5rem] 3xl:text-sm 4xl:text-base text-Date text-right tracking-widest text-nowrap uppercase">
                  {currentDate.day}{" "}
                  <span className="hidden md:block">
                    {" "}
                    , {currentDate.date} {currentDate.month} {currentDate.year}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                {location.countryCode && (
                  <img
                    src={`https://flagcdn.com/${location.countryCode.toLowerCase()}.svg`}
                    width="30"
                    alt={`Flag of ${location.countryCode}`}
                    className="lg:mx-3 ms-3"
                  />
                )}
              </div>
            </div>
            <div className="mt-5 lg:mt-0 lg:flex me-5 space-y-5 lg:space-y-0 items-center justify-center lg:space-x-10 ml-auto order-2 lg:order-2">
              <PiBagLight
                size={20}
                className="h-4 w-4 md:h-3 md:w-5 lg:h-5 lg:w-5 3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8"
              />
              <LiaUser
                size={20}
                className="h-4 w-4 md:h-3 md:w-3 lg:h-5 lg:w-5  3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8"
              />
            </div>
          </div>
        </div>
        <button className="flex ml-2 4xl:text-2xl md:-mt-14 py-1 mt-1 lg:p-5 md:px-5 font-thin">
          <PiArrowLeftThin
            className="m-1 mt-1 w-4 h-4 3xl:w-8 3xl:h-8"
            size={20}
          />
          <p className="text-[0.6rem] lg:text-sm 3xl:text-xl my-1">BACK</p>
        </button>
        <div
          className="lg:px-5 md:px-5 ml-3 pt-[18vh] lg:pt-[20] justify-between"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <p className="text-base lg:text-3xl 3xl:text-5xl my-1 tracking-wide">
            DISCOVER
          </p>
          <p className="text-lg lg:text-4xl 4xl:text-7xl 3xl:text-6xl 3xl:my-8 tracking-[0.25em]">
            A NEW WORLD
          </p>
          <p className="text-[0.6rem] lg:text-sm 4xl:text-3xl 2xl:text-lg 3xl:text-2xl my-5 md:my-3 3xl:mt-10 opacity-30 tracking-wide">
            FOR THOSE WHO WISH FOR MORE...
          </p>
        </div>
        <div className="absolute left-0 right-0 bottom-0 ">
          <div>
            <p className="text-xs md:text-[0.6rem] lg:text-sm 2xl:text-lg 4xl:text-3xl 3xl:text-2xl opacity-30 text-center tracking-widest ">
              BRING THE WORLD CLOSER TOGETHER
            </p>
            <div className="flex justify-center mb-10">
              <PiCaretDownThin
                width={100}
                height={100}
                className=" animate-bounce hover:animate-ping h-8 w-8 lg:h-20 lg:w-20 4xl:h-36 4xl:w-36"
                onClick={handleScroll}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
