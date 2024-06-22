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
    //return `${day}, ${date} ${month}  ${year}`;
    return { day, date, month, year };
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
        <div className="grid grid-cols-6 py-2">
          <div className="col-span-2 mt-auto md:mt-0">
            <div className="flex ">
              <Image
                src={logo1}
                width={50}
                className="max-w-6 lg:min-w-14 lg:mx-5 my-auto mx-2 4xl:min-w-20"
              />

              <Image
                src={logo}
                width={100}
                height={100}
                className="max-w-14 md:min-w-10 lg:min-w-32 4xl:min-w-52"
              />
              <p className="hidden md:block mt-auto mx-5">ABOUT</p>
            </div>
          </div>
          <div className="col-span-2 flex justify-center mt-auto md:-mt-4">
            <Image
              src={logo2}
              width={100}
              height={100}
              className="-mt-5 md:mt-0 md:mb-16 w-16 md:min-w-20 md:min-h-12 lg:min-w-40 lg:mt-3 4xl:min-w-72"
            />
          </div>
          <div className="col-span-2 flex space-x-5 pe-5 mt-1 md:mt-3">
            <div className="flex ml-auto">
              <div className="hidden md:block">
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
                  <>
                    <img
                      src={`https://flagcdn.com/${location.countryCode.toLowerCase()}.svg`}
                      width="30"
                      alt={`Flag of ${location.countryCode}`}
                      className="lg:mx-3 md:-mt-14 ms-3 h-5 w-5 4xl:w-10 4xl:h-10 3xl:w-10 3xl:h-10 md:h-unset md:w-unset"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="flex space-x-5 md:space-x-10">
              {" "}
              <PiBagLight
                size={20}
                className="h-4 w-4 md:h-3 4xl:mt-[2.1rem] md:w-5 lg:h-5 lg:w-5 3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8"
              />
              <LiaUser
                size={20}
                className="h-4 w-4 md:h-3 md:w-3 4xl:mt-[2.1rem] lg:h-5 lg:w-5  3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8"
              />
            </div>
          </div>
        </div>

        <button className="flex ml-2 lg:ml-0 4xl:text-2xl md:-mt-14 py-1 mt-4 lg:py-5 md:px-5 font-thin">
          <PiArrowLeftThin
            className=" mt-1 w-4 h-4 3xl:w-9 3xl:h-9"
            size={20}
          />
          <p className="text-[0.6rem] lg:text-sm 3xl:text-xl m-1">BACK</p>
        </button>
        <div
          className="lg:px-2 md:px-2 ml-3 pt-[18vh] lg:pt-[20] justify-between"
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
        <div className="absolute left-0 right-0 -bottom-8 md:bottom-0 ">
          <div className="">
            <p className="text-xs md:text-[0.6rem] lg:text-sm 2xl:text-lg 4xl:text-3xl 3xl:text-2xl opacity-30 text-center tracking-widest ">
              BRING THE WORLD CLOSER TOGETHER
            </p>
            <div className="flex justify-center mb-14 md:mb-0">
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
