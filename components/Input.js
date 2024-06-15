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
          className="w-11/12 lg:w-[40vw] tracking-widest uppercase my-2 placeholder:text-black text-sm lg:text-lg placeholder:text-sm lg:placeholder:text-lg focus:outline-none border-1 border-inputgrey text-center p-3 rounded-lg focus:border-1 focus:border-Date"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
