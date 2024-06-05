import Input from "../Input";

const Step1 = ({onNext}) => {
  return (
    <>
      <div className="flex justify-center ml-44 pb-20">
        <div className="mb-20">
          <Input placeholder="EMAIL ADDRESS" />
          <Input placeholder="CONFIRM EMAIL ADDRESS" />
          <Input placeholder="FIRST NAME" />
          <p className="text-center opacity-50 text-sm tracking-wide -mt-2 mb-2">
            Use your legal name as it appears on your official documents
          </p>
          <Input placeholder="LAST NAME (INCLUDING MIDDLE NAME)" />
          <Input type="date" />
          <Input placeholder="PAKISTAN" />
          <div className="flex">
            <Input placeholder="PHONE NUMBER" type="number" />
          </div>
          <p className="text-center opacity-50 text-sm tracking-wide -mb-2 mt-2">
            ZIMO AMBASSADOR REFERRAL CODE (ZAR CODE)
          </p>
          <Input placeholder="ZAR CODE (OPTIONAL)" type="number" />
        </div>
        <div className="mt-96">
          <button
            onClick={onNext}
            className="w-32 h-32 ml-20 mt-20 rounded-lg bg-black text-white "
          >
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default Step1;
