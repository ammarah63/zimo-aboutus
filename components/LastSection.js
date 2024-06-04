import Image from "next/image";
import pic1 from "../public/images/Group 4770.svg";
import pic2 from "../public/images/ale-aguilar-c9yY00KNTVs-unsplash.svg";

const LastSection = () => {
  return (
    <div className="h-screen">
      <div
        style={{
          backgroundImage: "url('/images/Path 27324.svg')",
        }}
        className="bg-cover bg-center h-2/4 lg:h-screen pt-[40vh] lg:pt-[60vh] text-white"
      >
        <div className="grid grid-cols-3 gap-1">
          <div className="flex justify-center">
            {" "}
            <Image
              src={pic2}
              width={100}
              height={100}
              className="min-h-36 min-w-[30vw] lg:min-w-[25vw] lg:mt-50"
              data-aos="fade-left"
              data-aos-once="true"
            />
          </div>
          <div className="col-span-2 flex justify-end">
            <Image
              src={pic1}
              width={100}
              height={100}
              className="min-h-36 min-w-[50vw] lg:mt-50"
              data-aos="fade-right"
              data-aos-once="true"
            />
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center h-2/4 bg-white lg:h-screen text-black text-center"></div>
    </div>
  );
};

export default LastSection;
