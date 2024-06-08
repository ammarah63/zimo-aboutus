import Image from "next/image";
import pic1 from "../public/images/Group 4762.svg";
import pic2 from "../public/images/Group 4758.svg";

const OneSourceSection = () => {
  return (
    <>
      <div className="bg-white bg-center h-screen p-5 lg:p-5 flex items-center justify-center">
        <div className="lg:grid lg:grid-cols-3 md:mb-12 lg:mb-12 lg:gap-2 md:grid md:grid-cols-3 md:gap-2">
          <div className="flex justify-center mt-12 lg:-mt-10 md:mt-0">
            <div>
              <div className="flex lg:ml-6 md:ml-6 justify-center">
                <Image
                  src={pic2}
                  width={100}
                  height={100}
                  className="min-w-[50vw] -mt-20  lg:min-h-16 lg:min-w-[30vw]  md:mt-32  md:min-h-26 md:min-w-[30vw]"
                  data-aos="fade-left"
                  data-aos-once="true"
                />
              </div>
              <div
                className="lg:ml-6 md:ml-6 4xl:mt-10"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <p className="text-lg mt-5 3xl:text-4xl 4xl:text-6xl lg:text-2xl text-center lg:text-left md:text-left tracking-widest">
                  OUR SOURCE
                </p>
                <p className="text-2xl text-nowrap lg:text-4xl 4xl:my-7 4xl:text-7xl 3xl:text-6xl text-center lg:text-left md:text-left tracking-widest lg:mt-3">
                  ENTRY TICKETS
                </p>
                <p className="text-nowrap text-xs text-center  4xl:text-3xl 3xl:text-2xl lg:text-left md:text-left lg:text-sm tracking-widest lg:mt-5 opacity-45">
                  FOR ALL PREMIUM LISTINGS
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-5 col-span-2 ml-auto ">
            <div className="flex justify-center items-center">
              <Image
                src={pic1}
                width={100}
                height={100}
                className=" xl:min-w-[50vw] lg:min-w-[60vw]  md:min-w-[52vw]  "
                data-aos="fade-right"
                data-aos-once="true"
              />
            </div>
            <p
              className="text-sm lg:text-base 4xl:text-4xl 3xl:text-2xl tracking-widest mt-3 lg:mt-10 text-center"
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
