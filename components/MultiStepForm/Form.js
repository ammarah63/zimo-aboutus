import { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/Group 4758.svg";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import AddOpinion from "./AddOpinion";

const Form = () => {
  const [step, setStep] = useState(1);
  const onNext = () => {
    setStep(step + 1);
  };

  const onPrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="relative h-screen bg-white flex justify-center items-center">
      <div className="relative flex items-center justify-center">
        <Image
          width={100}
          height={100}
          src={logo}
          className="max-w-96 lg:min-w-[50vw] blur-2xl"
          alt="Logo"
        />
      </div>
      <div className="absolute top-0 h-screen  w-screen">
        <p className="text-xl text-center tracking-widest ">YOUR APPLICATION</p>

        <div className="flex justify-center items-center space-x-8 mt-8">
          <div className="flex items-center justify-end gap-x-2 mt-1">
            <div
              className={`bg-${
                step === 1 ? "black" : "Date"
              } h-[2px] w-[60px] lg:w-[60px]`}
            ></div>
            <div
              className={`bg-${
                step === 2 ? "black" : "Date"
              } h-[2px] w-[60px] lg:w-[60px]`}
            ></div>
            <div
              className={`bg-${
                step === 3 ? "black" : "Date"
              } h-[2px] w-[60px] lg:w-[60px]`}
            ></div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-7 ml-6">
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
            />
          )}
          {step === 4 && <AddOpinion onNext={onNext} />}
        </div>
      </div>
    </div>
  );
};

export default Form;
