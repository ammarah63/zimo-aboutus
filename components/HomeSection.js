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
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }

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

    AOS.init({
      duration: 1000,
      once: true,
    });

    const timer = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // const fetchLocation = async () => {
    //   const response = await fetch("http://ip-api.com/json");
    //   const data = await response.json();
    //   console.log(data.countryCode);
    //   setLocation({
    //     city: data.city,
    //     country: data.country,
    //     countryCode: data.countryCode,
    //   });
    // };
    setLocation({
      city: locationData.city,
      country: locationData.country,
      countryCode: locationData.countryCode,
    });

    // fetchLocation();
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
        className=" bg-cover bg-center h-screen lg:p-10  text-white"
      >
        <div className="grid grid-cols-6">
          <div className="ml-3 lg:flex md:flex col-span-2 mt-3 lg:mt-2">
            <div className="flex order-2 lg:order-2 md:order-2">
              <div className="pe-1 lg:px-2">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  className="max-w-20 lg:min-w-32"
                />
              </div>
              <div>
                <p className="lg:text-sm text-xs mt-2 lg:mt-5 lg:ms-3">ABOUT</p>
              </div>
            </div>
            <div className="order-1 md:order-1 lg:order-1 mt-3 md:mt-0 lg:mt-0">
              <Image
                src={logo1}
                width={50}
                className="max-w-8 lg:min-w-14 lg:mx-5 my-auto md:mx-2"
              />
            </div>
          </div>

          <div className="flex items-center justify-center col-span-2">
            <Image
              src={logo2}
              width={100}
              height={100}
              className=" min-h-10  min-w-20 lg:min-w-40 lg:mt-0"
            />
          </div>
          <div className="flex ml-auto col-span-2 flex-col lg:flex-row  lg:items-center">
            <div className="flex order-1 mt-1 -ms-28 me-3 lg:me-8 lg:my-3 lg:mt-5  lg:order-1">
              <div>
                {mounted && (
                  <p className="text-[0.6rem] xl:text-sm text-white tracking-widest text-nowrap uppercase">
                    {currentTime} {location.city}, {location.country}
                  </p>
                )}
                <p className="text-[0.6rem] xl:text-sm text-Date text-right tracking-widest text-nowrap uppercase">
                  {currentDate}
                </p>
              </div>
              <div>
                {location.countryCode && (
                  <img
                    src={`https://flagcdn.com/${location.countryCode.toLowerCase()}.svg`}
                    width="30"
                    alt={`Flag of ${location.countryCode}`}
                    className="lg:mx-3 ms-3 my-1"
                  />
                )}
              </div>
            </div>
            <div className="mt-5 lg:mt-0 lg:flex me-5 space-y-5 lg:space-y-0 items-center justify-center lg:space-x-10 ml-auto order-2 lg:order-2">
              <PiBagLight size={20} className="xl:w-10 xl:h-10" />
              <LiaUser size={20} className="xl:w-10 xl:h-10" />
            </div>
          </div>
        </div>
        <div className="flex ml-2  py-5 mt-3 lg:p-5 md:p-5 font-thin">
          <PiArrowLeftThin className="m-1 mt-1 xl:w-8 xl:h-8" size={20} />
          <p className="text-xs lg:text-sm xl:text-xl my-1">BACK</p>
        </div>
        <div
          className="lg:px-5 md:px-5 ml-3 pt-[18vh] lg:pt-[20] tracking-wider"
          data-aos="fade-right "
          data-aos-once="true"
        >
          <p className="text-lg lg:text-3xl xl:text-4xl my-3 ">DISCOVER</p>
          <p className="text-xl lg:text-4xl xl:text-5xl">A NEW WORLD</p>
          <p className="text-xs lg:text-sm xl:text-base my-5 opacity-30 ">
            FOR THOSE WHO WISH FOR MORE...
          </p>
        </div>
        <div className="pt-[23vh] lg:pt-20 xl:pt-[35vh] md:pt-20">
          <p className="text-xs lg:text-sm xl:text-base opacity-30 text-center tracking-widest my-1">
            BRING THE WORLD CLOSER TOGETHER
          </p>
          <div className="flex items-center justify-center">
            <PiCaretDownThin
              className=" animate-bounce hover:animate-ping h-20 w-20 lg:h-24"
              onClick={handleScroll}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
