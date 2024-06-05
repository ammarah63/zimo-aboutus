import Input from "../Input";

const Step2 = ({ onNext }) => {
  return (
    <>
      {" "}
      <div className="flex justify-center ml-44 ">
        <div className="mb-20">
          <p className="text-center text-xl tracking-widest py-3">
            Email Address
          </p>
          <p className="text-center text-xl tracking-widest py-3">Full Name</p>
          <Input placeholder="NATIONAL ID NUMBER CNIC" />
          <Input placeholder="ADDRESS 1" />
          <Input placeholder="ADDRESS 2 (APARTMENT, SUITE, ETC.)" />
          <Input placeholder="CITY" />

          <Input placeholder="STATE / REGION" />

          <Input placeholder="ZIP CODE / POST CODE" type="number" />
        </div>
        <div className="flex justify-end items-end">
          <button
            onClick={onNext}
            className="w-32 h-32 ml-20 mb-20 mt-1 rounded-lg bg-black text-white"
          >
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default Step2;
