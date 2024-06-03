import Image from "next/image";
import pic1 from "../public/images/Group 4762.svg";
import pic2 from "../public/images/Group 4758.svg";

const OneSourceSection = () => {
  return (
    <>
      <div className="bg-white bg-center h-screen lg:p-10 ">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center">
            <div>
              <div className="flex ml-6 justify-center items-center">
                <Image
                  src={pic2}
                  width={100}
                  height={100}
                  className="min-h-28 lg:min-h-36 min-w-[26vw] mt-32"
                  data-aos="fade-left"
                  data-aos-once="true"
                />
              </div>
              <div className="ml-6" data-aos="fade-up" data-aos-once="true">
                <p className="text-base lg:text-2xl tracking-widest">OUR SOURCE</p>
                <p className="text-lg lg:text-4xl tracking-widest mt-3">ENTRY TICKETS</p>
                <p className="text-nowrap text-xs lg:text-sm tracking-widest mt-5 opacity-45">
                  FOR ALL PREMIUM LISTINGS
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 col-span-2 ml-auto pe-10 ">
            <div className="flex justify-center items-center">
              <Image
                src={pic1}
                width={100}
                height={100}
                className="lg:min-h-96 min-w-[52vw]  "
                data-aos="fade-right"
                data-aos-once="true"
              />
            </div>
            <p
              className="text-sm lg:text-base tracking-widest mt-10 text-center"
              data-aos="fade-up"
              data-aos-once="true"
            >
              LET YOUR DREAMS FIND YOU
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneSourceSection;
