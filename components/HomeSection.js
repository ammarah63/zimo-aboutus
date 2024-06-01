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

const HomeSection = () => {
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
    const fetchLocation = async () => {
      const response = await fetch("http://ip-api.com/json");
      const data = await response.json();
      console.log(data.countryCode);
      setLocation({
        city: data.city,
        country: data.country,
        countryCode: data.countryCode,
      });
    };

    fetchLocation();
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
        className="bg-cover bg-center h-screen lg:p-10 p-5 text-white"
      >
        <div className="grid grid-cols-6">
          <div className="flex col-span-2 mt-3 lg:mt-2">
            <div>
              <Image src={logo1} width={50} className="min-w-6 lg:mx-5 my-auto"/>
            </div>
            <div className="px-2">
              <Image
                src={logo}
                width={100}
                height={100}
                className=" min-h-10 lg:min-w-32  min-w-20"
              />
            </div>
            <div>
              <p className="lg:text-sm text-xs mt-5 lg:ms-3">ABOUT</p>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-2">
            <Image
              src={logo2}
              width={100}
              height={100}
              className=" min-h-10  min-w-20 lg:min-w-40 "
            />
          </div>
          <div className="flex ml-auto col-span-2 flex-col lg:flex-row  lg:items-center">
            <div className="flex lg:me-8 my-3 lg:order-1 ml-auto">
              <div>
                {mounted && (
                  <p className="text-[0.6rem] text-white tracking-widest text-nowrap uppercase">
                    {currentTime} {location.city}, {location.country}
                  </p>
                )}
                <p className="text-[0.6rem] text-Date text-right tracking-widest text-nowrap uppercase">
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
            <div className="flex items-center space-x-10 ml-auto lg:order-2">
              <PiBagLight size={20} />
              <LiaUser size={20} />
            </div>
          </div>
        </div>
        <div className="flex p-5 font-thin">
          <PiArrowLeftThin className="m-1 mt-1" size={20} />{" "}
          <p className="text-sm my-1">BACK</p>
        </div>
        <div
          className="px-5 lg:pt-32 pt-20 tracking-wider"
          data-aos="fade-right "
          data-aos-once="true"
        >
          <p className="text-3xl my-3 ">DISCOVER</p>
          <p className="text-4xl ">A NEW WORLD</p>
          <p className="text-sm my-5 opacity-30 ">
            FOR THOSE WHO WISH FOR MORE...
          </p>
        </div>
        <div className="pt-15 lg:pt-20 ">
          <p className="text-sm opacity-30 text-center tracking-widest my-1">
            BRING THE WORLD CLOSER TOGETHER
          </p>
          <div className="flex items-center justify-center">
            <PiCaretDownThin
              size={75}
              className=" animate-bounce hover:animate-ping"
              onClick={handleScroll}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;