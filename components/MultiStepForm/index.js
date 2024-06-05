import Image from "next/image";
import logo from "../../public/images/Group 4758.svg";
import { useState } from "react";
import { PiCaretDownThin } from "react-icons/pi";
import { PiArrowLeftThin } from "react-icons/pi";
import Form from "./Form";

const MultiStepform = () => {
  const [apply, setApply] = useState(false);

  // Function to handle applying
  const handleApply = () => {
    setApply(true);
  };

  // Function to handle closing modal
  const handleCloseModal = () => {
    setApply(false);
  };

  return (
    <div className="h-screen relative">
      <div className="relative h-screen">
        <div
          onClick={() => setApply(false)}
          className="flex ml-5 mt-5 font-thin"
        >
          <PiArrowLeftThin className="m-1 mt-1" size={20} />
          <p className="text-xs lg:text-sm my-1">BACK</p>
        </div>
        <div className="relative flex items-center justify-center ml-32 pt-10">
          <div className="border border-Date rounded-2xl w-[50vw] p-5">
            <p className="text-base tracking-widest my-8 text-center">
              START YOUR APPLICATION
            </p>
            <div className="flex flex-col items-center">
              <Image
                src={logo}
                width={100}
                height={100}
                className="max-w-30 lg:min-w-64 mt-8"
                alt="Logo"
              />
              <h1 className="text-6xl !font-thin text-center tracking-widest mt-4">
                CAREERS
              </h1>

              {apply ? (
                <select className="custom-select border-2 border-gray focus:border-Date focus:outline-none active:border-gray mt-14 text-center px-6 mb-5 tracking-widest p-3 w-7/12 rounded-lg">
                  <option value="">CHOOSE YOUR ROLE FIELD</option>
                  {/* Add actual options here */}
                </select>
              ) : (
                <select className="custom-select border-2 border-gray focus:border-Date focus:outline-none active:border-gray mt-14 text-center px-6 mb-5 tracking-widest p-3 w-7/12 rounded-lg">
                  <option value="">SELECT YOUR COUNTRY</option>
                  {/* Add actual options here */}
                </select>
              )}
            </div>
          </div>

          {apply ? (
            <button
              onClick={handleApply}
              className="w-32 h-32 rounded-lg bg-black text-white translate-y-20 -translate-x-16"
            >
              APPLY
            </button>
          ) : (
            <button
              onClick={() => setApply(true)}
              className="w-32 h-32 rounded-lg bg-black text-white translate-y-20 -translate-x-16"
            >
              START
            </button>
          )}
        </div>

        <style jsx>{`
          .custom-select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-image: url("data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iYmxhY2siIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGhlaWdodD0iMWVtIiB3aWR0aD0iMWVtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMTAuODMsOTguODNsLTgwLDgwYTQsNCwwLDAsMS01LjY2LDBsLTgwLTgwYTQsNCwwLDAsMSw1LjY2LTUuNjZMMTI4LDE3MC4zNGw3Ny4xNy03Ny4xN2E0LDQsMCwxLDEsNS42Niw1LjY2WiI+PC9wYXRoPjwvc3ZnPg=="); /* Base64 encoded SVG for dropdown arrow icon */
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 30px 30px;
          }
        `}</style>
      </div>
      <div className="absolute top-0 w-full  mb-96">
        {" "}
        {apply && <Form onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default MultiStepform;
