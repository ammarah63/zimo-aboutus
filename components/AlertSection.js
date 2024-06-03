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
        <div className="h-screen backdrop-brightness-35 p-2 lg:p-10 pt-20">
          <div className="grid grid-cols-2  gap-1 px-0 lg:px-10 mt-5 overflow-x-hidden">
            <div></div>
            <div
              className="ml-auto me-0 pe-0"
              data-aos="fade-left"
              data-aos-once="true"
            >
              <p className="text-base lg:text-2xl tracking-widest">
                PERSONALISED FOR YOU
              </p>
              <div className="w-[40vw] lg:w-[30vw]">
                <p className="text-xs lg:text-sm tracking-widest mt-7 opacity-45 ">
                  DELIVERING THOUSANDS OF PERSONALISED ALERTS EVERYDAY, OUR
                  USERS CAN BE FIRST IN LINE WHEN THAT OPPORTUNITY OF A LIFETIME
                  IS HERE
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 px-10 mt-5">
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
                <p
                  className="text-xs lg:text-sm tracking-widest mt-24 text-justify"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  CREATE USER ID
                </p>
                <PiArrowRightThin
                  className="m-1 mt-24"
                  color="white"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertSection;
