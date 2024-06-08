import Image from "next/image";
import logo from "../public/images/Group 4743.svg";
import { PiCaretDownThin } from "react-icons/pi";

const RealStateSection = () => {
  let myInterval;

  const handleScroll = () => {
    const nextSection = document.getElementById("OurCategoriesSection");
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
        id="realStateSection"
        className="bg-white bg-center relative h-screen py-5 px-5 lg:px-10 "
      >
        <div>
          <p
            className="text-center mt-6 md:mt-0 xl:mt-4 4xl:mt-10 text-[0.6rem] lg:text-sm 3xl:text-lg 4xl:text-3xl tracking-widest"
            data-aos="fade-up"
            data-aos-once="true"
          >
            A REAL STATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div>
            <div
              className=" grid grid-cols-2 gap-1 mt-10 3xl:mt-20 4xl:mt-28"
              data-aos="fade-right"
              data-aos-once="true"
            >
              <div>
                <p className="text-xs lg:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-widest 2xl:tracking-[0.11em]">
                  A REVOLUTIONARY PLATFORM
                </p>
                <p className="text-base lg:text-4xl xl:tracking-[0.17em] 4xl:tracking-[0.18em] tracking-widest 4xl:text-7xl 3xl:text-6xl mt-2 2xl:tracking-[0.17em] 3xl:tracking-widest">
                  ENTRIES - SELLERS
                </p>
                <p className="text-lg  4xl:text-8xl lg:text-5xl xl:tracking-[0.27em] 3xl:text-7xl mt-2 2xl:tracking-[0.27em] 3xl:tracking-[0.27em]">
                  WORLDWIDE
                </p>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-2 gap-1  !overflow-hidden">
              <div></div>
              <div
                className="ml-auto"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={logo}
                    width={100}
                    height={100}
                    className="min-w-44 lg:min-h-20 lg:min-w-96 3xl:min-w-[28vw] "
                  />
                </div>
                <p className="text-center text-[0.6rem] lg:text-sm 3xl:text-lg 4xl:text-3xl  4xl:mt-16 tracking-widest mt-3">
                  CONNECTING USERS FROM ACROSS THE GLOBE
                </p>
                <p className="text-center  text-[0.6rem] lg:text-sm 3xl:text-lg 4xl:text-3xl 4xl:my-5 tracking-widest">
                  TO FACILITATE LIFE&apos;S MOST IMPORTANT
                </p>
                <p className="text-center  text-[0.6rem] lg:text-sm 3xl:text-lg 4xl:text-3xl tracking-widest">
                  PERSONAL TRANSACTIONS
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1  xl:mt-auto 3xl:mt-10">
              <div
                data-aos="fade-right"
                data-aos-once="true"
                className="overflow-hidden "
              >
                <p className="text-sm lg:text-3xl 3xl:text-5xl 4xl:text-7xl tracking-widest">
                  THE BEST OF THE BEST
                </p>
                <p className="tracking-widest text-[0.6rem] lg:text-sm md:mt-2 2xl:text-lg 2xl:tracking-[0.17em] 4xl:text-3xl 4xl:mt-16 3xl:text-lg 3xl:tracking-[0.2em] mt-4 2xl:mt-7">
                  A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS
                  AND MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON
                  THE MARKET FROM ACROSS THE WORLD.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-5 flex justify-center">
          <PiCaretDownThin
            size={75}
            className=" animate-bounce hover:animate-ping md:h-8 md:w-8 lg:h-20 lg:w-20 4xl:h-40 4xl:w-40"
            onClick={handleScroll}
          />
        </div>
      </div>
    </>
  );
};

export default RealStateSection;
