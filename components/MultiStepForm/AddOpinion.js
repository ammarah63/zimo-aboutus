const AddOpinion = () => {
    return (
      <>
        <div className="flex justify-center items-center ml-44 pb-20">
          <div className="mb-20">
            <p className="text-center text-xl tracking-widest py-3">
              SUPPORTING INFORMATION
            </p>
            <p className="text-center text-xl tracking-widest py-3">
              Email Address
            </p>
            <p className="text-center text-xl tracking-widest py-3">
              Full Name
            </p>
            <p className="uppercase text-[10px] text-center tracking-[0.6px] max-w-[942px] w-[80%] mx-auto leading-6">
              YOU CAN PROVIDE ADDITIONAL (SUPPORTING) information to help us
              better understand YOU AS A PERSON AND your
              qualifications/suitability for the role/program/INTERNSHIP. please
              provide us with additional details WHICH YOU BELIEVE WILL SUPPORT
              YOUR APPLICATION.
            </p>
            <textarea
              style={{ backgroundColor: "transparent" }}
              rows={11}
              placeholder="Supporting Information..."
              className="w-[50vw] ml-32 my-2 placeholder:text-inputgrey text-base placeholder:text-base focus:outline-none border-1 border-inputgrey p-3 rounded-lg focus:border-1 focus:border-Date"
            />
          </div>
          <div className=" mt-52">
            <div className="space-y-4">
            <button
              // onClick={onNext}
              className="w-32 h-32  rounded-lg bg-white text-black border border-black"
            >
              CANCEL
            </button>
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
}
 
export default AddOpinion;