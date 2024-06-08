import Image from "next/image";

import { PiArrowRightThin } from "react-icons/pi";
import pic1 from "../public/images/Group 4764.svg";

const AlertSection = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/Path 27320.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        className=" bg-cover bg-center  h-screen  text-white"
      >
        {/* backdrop-brightness-35 */}
        <div className="h-screen p-2 lg:p-10 lg:pt-10 3xl:pt-1 md:pe-5">
          <div className="grid grid-cols-2 3xl:mt-16 3xl:px-10 gap-4 px-0 lg:px-10 mt-5 overflow-x-hidden">
            <div></div>
            <div
              className="flex justify-end items-end"
              data-aos="fade-left"
              data-aos-once="true"
            >
              <div className="4xl:ml-auto xl:ml-auto ml-auto ">
                <p className="text-sm md:text-base text-nowrap md:text-wrap ml-auto xl:ml-auto xl:w-7/12 lg:text-2xl 2xl:text-2xl 2xl:tracking-[0.2em] 2xl:w-7/12 4xl:w-4/5 2xl:text-nowrap 2xl:ml-auto 3xl:text-5xl 4xl:text-6xl 3xl:tracking-[0.2em] 3xl:w-10/12 3xl:text-nowrap 3xl:ml-auto tracking-widest">
                  PERSONALISED FOR YOU
                </p>
                <div className="w-[53vw] md:w-[31vw] 4xl:ml-auto ml-auto xl:w-7/12 4xl:w-9/12 lg:w-[33vw] 3xl:w-10/12 3xl:ml-auto 2xl:w-7/12 2xl:ml-auto">
                  <p className="text-xs lg:text-sm ml-auto text-justify 4xl:ml-auto tracking-widest md:mt-3 lg:mt-3 opacity-45 2xl:text-sm 2xl:mt-5 2xl:text-justify xl:tracking-wide lg:tracking-wide 2xl:tracking-[0.1em] 3xl:text-2xl 4xl:text-3xl 3xl:mt-9 3xl:text-justify 3xl:tracking-[0.2em] ">
                    DELIVERING THOUSANDS OF PERSONALISED ALERTS EVERYDAY, OUR
                    USERS CAN BE FIRST IN LINE WHEN THAT OPPORTUNITY OF A
                    LIFETIME IS HERE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 mt-16 md:px-10 lg:mt-12">
            <div>
              <Image
                src={pic1}
                width={100}
                height={100}
                className="min-h-36 min-w-[26vw] mt-9"
                data-aos="fade-right"
                data-aos-once="true"
              />
            </div>
            <div className="ml-auto">
              <div className="flex">
                <button
                  className="flex text-xs text-nowrap 4xl:text-3xl lg:text-sm 3xl:text-xl tracking-widest mt-24 text-justify"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  CREATE USER ID{" "}
                  <PiArrowRightThin
                    className=" 3xl:h-8 3xl:w-8 4xl:h-10 4xl:w-10 mx-1"
                    size={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertSection;
