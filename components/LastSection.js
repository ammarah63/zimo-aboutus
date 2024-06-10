import Image from "next/image";
import pic1 from "../public/images/Group 4770.svg";
import pic2 from "../public/images/ale-aguilar-c9yY00KNTVs-unsplash.svg";

const LastSection = () => {
  return (
    <div className="h-screen relative">
      <div
        style={{
          backgroundImage: "url('/images/Path 27324.svg')",
        }}
        className="bg-cover bg-center h-2/4 lg:h-screen text-white flex justify-center"
      ></div>

      <div className="bg-cover relative bg-center h-2/4 flex justify-center bg-white lg:h-screen text-black text-center">
        {" "}
        <div className="absolute inset-0 md:-mt-[50%] -mt-[21rem] grid grid-cols-3 gap-4 ">
          <div className="flex justify-center">
            {" "}
            <Image
              src={pic2}
              width={100}
              height={100}
              className="min-h-36 min-w-[30vw] lg:min-w-[25vw] xl:p-2"
              data-aos="fade-left"
              data-aos-once="true"
            />
          </div>
          <div className="col-span-2 flex justify-end">
            <Image
              src={pic1}
              width={100}
              height={100}
              className="min-h-36 min-w-[50vw] 2xl:mt-24 3xl:mt-28"
              data-aos="fade-right"
              data-aos-once="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
