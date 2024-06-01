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
      <div className="bg-white bg-center h-screen py-5 px-10 ">
        <div id="realStateSection">
          <p
            className="text-center  text-sm tracking-widest"
            data-aos="fade-up"
            data-aos-once="true"
          >
            A REAL STATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
          </p>
        </div>
        <div
          className="grid grid-cols-2 gap-4 mt-12 "
          data-aos="fade-right"
          data-aos-once="true"
        >
          <div>
            <p className="text-2xl tracking-widest">A REVOLUTIONARY PLATFORM</p>
            <p className="text-4xl mt-2 tracking-widest">ENTRIES - SELLERS</p>
            <p className="text-5xl mt-2 tracking-widest">WORLDWIDE</p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 gap-4  !overflow-hidden">
          <div></div>
          <div className="ml-auto" data-aos="fade-left" data-aos-once="true">
            <div className="flex items-center justify-center">
              <Image
                src={logo}
                width={100}
                height={100}
                className=" min-h-20 min-w-96"
              />
            </div>
            <p className="text-center text-sm tracking-widest mt-7">
              CONNECTING USERS FROM ACROSS THE GLOBE
            </p>
            <p className="text-center text-sm tracking-widest">
              TO FACILITATE LIFE'S MOST IMPORTANT
            </p>
            <p className="text-center text-sm tracking-widest">
              PERSONAL TRANSACTIONS
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 -mt-10">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="overflow-hidden"
          >
            <p className="text-3xl tracking-widest">THE BEST OF THE BEST</p>
            <p className="tracking-widest text-sm mt-7">
              A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
              MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
              FROM ACROSS THE WORLD.
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <div className="flex items-center justify-center mt-7">
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

export default RealStateSection;
