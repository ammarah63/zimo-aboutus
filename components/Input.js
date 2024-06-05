const Input = ({ placeholder, type }) => {
  return (
    <>
      <div>
        <input
          style={{ backgroundColor: "transparent" }}
          type={type||"text"}
          className="w-[40vw] uppercase my-2 placeholder:text-black text-lg placeholder:text-lg focus:outline-none border-1 border-inputgrey text-center p-3 rounded-lg focus:border-1 focus:border-Date"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
