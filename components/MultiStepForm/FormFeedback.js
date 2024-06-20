import logo from "../../public/images/Group 4758.svg";
import Thankyou from "../../public/images/Thank-you-logo.png";
import internship from "../../public/images/zimoInternship.png";
import team from "../../public/images/zimo-team-black.png";
import Image from "next/image";

const FormFeedback = () => {
  return (
    <>
      <div className="flex justify-center h-screen p-5">
        <div className="border border-Date rounded-2xl h-4/5 w-full lg:w-[50vw] p-5 mt-14">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-6">
              <div></div>
              <div></div>
              <div className="col-span-2">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  className="w-10/12"
                  alt="Logo"
                />

                <p className="text-4xl !font-thin tracking-widest mt-4">
                  CAREERS
                </p>
              </div>
              <div className="col-span-2 ml-auto">
                <Image
                  src={internship}
                  width={100}
                  height={100}
                  className="ml-auto w-full"
                  alt="internship"
                />
              </div>
            </div>
          </div>
          <div className="text-xs text-center tracking-wider text-bordergrey space-y-5 mt-10">
            <p>
              Thank you for submitting an application for the ZIMO Internship
              Programme.
            </p>
            <p>
              We are super delighted to hear from you and we look forward to
              welcoming you to the world of ZIMO.
            </p>
          </div>
          <div className="flex justify-center my-16">
            <Image
              src={Thankyou}
              width={100}
              height={100}
              className="w-5/12"
              alt="Thankyou"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={team}
              width={100}
              height={100}
              className="w-5/12"
              alt="Team"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormFeedback;
