import Image from "next/image";
import logo from "../../public/images/Group 4758.svg";
import team from "../../public/images/zimo-team-black.png";
import internship from "../../public/images/zimoInternship.png";

const Footer = () => {
  return (
    <>
      <div className="mt-10 lg:px-10 mb-20">
        <div className="flex justify-between items-end">
          <Image
            width={100}
            height={100}
            src={team}
            objectFit="fill"
            className="min-w-32 lg:min-w-72 h-5 lg:h-10"
          />
          <Image
            width={100}
            height={100}
            src={internship}
            objectFit="fill"
            className="lg:mt-10 min-w-8 w-14 lg:min-w-24 3xl:min-w-32 3xl:h-24 h-10 lg:h-16"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
