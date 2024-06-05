import FileInput from "../FileInput";
import Input from "../Input";

const Step3 = ({onNext}) => {
  return (
    <>
      {" "}
      <div className="flex justify-center ml-44 pb-20">
        <div className="mb-20">
          <p className="text-center text-xl tracking-widest py-3">
            Email Address
          </p>
          <p className="text-center text-xl tracking-widest py-3">Full Name</p>
          <Input placeholder="QUALIFICATION(S)" />
          <Input placeholder="YEAR OF COMPLETION" />
          <Input placeholder="UNIVERSITY" />
          <Input placeholder="EXPERIENCE" />

          <Input placeholder="CURRENT EMPLOYMENT STATUS" />

          <FileInput />
          <p className="text-center opacity-50 text-sm tracking-wide mb-2 mt-2">
            UPLOAD YOUR RÉSUMÉ IN ENGLISH AS DOCX OR PDF ONLY
          </p>
          <p className="text-center opacity-50 text-sm w-[500px] tracking-wide mb-2 mt-2">
            By proceeding, you are confirming that you agree to the information
            you have provided to be used in accordance with ZIMO'S application processes
          </p>
        </div>
        <div className="flex justify-end mt-60 ml-20 ">
          <div className="space-y-4">
            <button
              onClick={onNext}
              className="w-32 h-32  rounded-lg bg-black text-white"
            >
              <span className="text-xs opacity-40">OPTIONAL</span> <br />
              ADD SUPPORTING STATEMENT
            </button>
            <br />
            <button
              //  onClick={onNext}
              className="w-32 h-32 rounded-lg bg-black text-white"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
