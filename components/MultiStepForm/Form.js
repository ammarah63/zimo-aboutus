import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/Group 4758.svg";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import AddOpinion from "./AddOpinion";
import FormFeedback from "./FormFeedback";
import { PiArrowLeftThin } from "react-icons/pi";
import Footer from "./Footer";

const Form = ({ onClose, handleFeedback }) => {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [opinionAdded, setOpinionAdded] = useState(false);
  const onNext = () => {
    setStep(step + 1);
  };
  const handleAddopinion = () => {
    setOpinionAdded(true);
  };
  const onPrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onClose();
    }
  };

  useEffect(() => {
    console.log("step", step);
  }, [step]);
  const handleFormSubmit = () => {
    setFormSubmitted(true); // Update state to show form feedback
    setStep(0);
  };
  useEffect(() => {
    const originalOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = originalOverflow;
    };
  }, []);
  return (
    <>
      <div className="fixed inset-0 w-[100vw] overflow-y-auto overflow-x-hidden bg-white flex justify-center items-center z-50">
        <div className="relative flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src={logo}
            className="max-w-96 lg:min-w-[50vw] blur-2xl"
            alt="Logo"
          />
        </div>
        <div className="absolute top-0  w-screen">
          {formSubmitted ? (
            <></>
          ) : (
            <div className="grid grid-cols-6">
              <div className="col-span-2 p-3 lg:p-5">
                <p className=" ml-5 mt-5 font-thin text-sm 3xl:text-2xl lg:text-xl">
                  APPLY
                </p>
                <div
                  onClick={onPrev}
                  className="flex ml-3 mt-2 font-thin tracking-wider"
                >
                  {step === 4 ? (
                    <button className="flex btn text-nowrap 3xl:text-2xl text-xs md:text-sm lg:text-xl my-1">
                      <PiArrowLeftThin
                        className="m-1  lg:mt-2 h-4 w-4 lg:h-6 lg:w-6 3xl:w-10 3xl:h-10"
                        size={30}
                      />{" "}
                      BACK TO YOUR APPLICATION
                    </button>
                  ) : (
                    <button className="flex btn text-sm 3xl:text-2xl lg:text-xl my-1">
                      <PiArrowLeftThin
                        className="m-1  lg:mt-2 h-4 w-4 lg:h-6 lg:w-6 3xl:w-10 3xl:h-10"
                        size={30}
                      />{" "}
                      BACK
                    </button>
                  )}
                </div>
              </div>
              <div className="col-span-4 pe-3 lg:col-span-2 flex justify-end lg:justify-center ">
                <div>
                  <p className="text-sm  3xl:text-4xl  text-nowrap lg:text-xl mt-8 text-end lg:text-center tracking-widest ">
                    YOUR APPLICATION
                  </p>

                  <div className="flex justify-end lg:justify-center items-center space-x-8 mt-5 3xl:mt-5">
                    <div className="flex items-center justify-end gap-x-2 mt-1">
                      <div
                        className={`${
                          step >= 1 ? "bg-[#BE9F56]" : "bg-black"
                        } h-[2px] w-[30px] lg:w-[60px] 3xl:w-[80px] 3xl:h-[4px]`}
                      ></div>
                      <div
                        className={`${
                          step >= 2 ? "bg-[#BE9F56]" : "bg-black"
                        } h-[2px] w-[30px] lg:w-[60px] 3xl:w-[80px] 3xl:h-[4px]`}
                      ></div>
                      <div
                        className={`${
                          step >= 3 ? "bg-[#BE9F56]" : "bg-black"
                        } h-[2px] w-[30px] lg:w-[60px] 3xl:w-[80px] 3xl:h-[4px]`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-center items-center mt-9 lg:ml-6 3xl:mt-0">
            {step === 1 && (
              <Step1
                //   formData={formData}
                // setFormData={setFormData}
                onNext={onNext}
              />
            )}
            {step === 2 && (
              <Step2
                // formData={formData}
                // setFormData={setFormData}
                onNext={onNext}
                onPrev={onPrev}
              />
            )}
            {step === 3 && (
              <Step3
                // formData={formData}
                // setFormData={setFormData}
                onNext={onNext}
                onPrev={onPrev}
                handleFormSubmit={handleFormSubmit}
                handleClose={onClose}
                handleFeedback={handleFeedback}
                opinionAdded={opinionAdded}
              />
            )}
            {step === 4 && (
              <AddOpinion
                onNext={onNext}
                onPrev={onPrev}
                handleAddopinion={handleAddopinion}
              />
            )}
            {formSubmitted && <FormFeedback />}
          </div>
          <div className="px-3">{formSubmitted ? <></> : <Footer />}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
