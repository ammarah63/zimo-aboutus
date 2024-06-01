import Image from "next/image";
import pic1 from "../public/images/Group 4769.svg";
import pic2 from "../public/images/Group 4766.svg";


const ZimoPartnersDection = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-white h-screen text-black text-center">
        <div className="grid grid-cols-3 gap-1 h-screen">
          <div className="flex justify-center">
            <Image
              src={pic2}
              width={50}
              height={50}
              className="mx-auto w-[15vw]"
              data-aos="fade-right"
              data-aos-once="true"
            />
          </div>
          <div className="flex justify-center">
            {" "}
            <Image
              src={pic1}
              width={50}
              height={50}
              className="mx-auto w-[15vw]"
              data-aos="fade-up"
              data-aos-once="true"
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ZimoPartnersDection;
