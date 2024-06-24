const Input = ({ placeholder, type, onChange, onBlur, name, value }) => {
  return (
    <>
      <div>
        <input
          style={{ backgroundColor: "transparent" }}
          type={type || "text"}
          onChange={onChange}
          name={name}
          value={value}
          onBlur={onBlur}
          className="w-[85vw] lg:w-[40vw] md:w-[78vw] tracking-widest uppercase my-2 4xl:my-5 3xl:my-3 placeholder:text-black text-sm lg:text-lg 3xl:text-xl 4xl:text-4xl placeholder:text-sm lg:placeholder:text-lg 3xl:placeholder:text-xl 4xl:placeholder:text-4xl focus:outline-none border-1 border-inputgrey text-center p-3 rounded-lg focus:border-1 focus:border-Date"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
