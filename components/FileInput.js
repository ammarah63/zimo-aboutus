const FileInput = ({ onChange, onBlur, name, filename }) => {
  const handleClick = () => {
    document.getElementById("files").click(); // Trigger file input click when div is clicked
  };

  const handleFileChange = (event) => {
    if (onChange) {
      onChange(event); // Pass the event to the onChange handler
    }
  };

  const handleFileBlur = (event) => {
    if (onBlur) {
      onBlur(event); // Pass the event to the onBlur handler
    }
  };

  return (
    <>
      <div
        className="w-11/12 lg:w-[40vw] h-10 lg:h-12 text-sm lg:text-lg !p-0 focus:outline-none border-1 border-inputgrey !text-center px-3 rounded-lg focus:border-1 focus:border-Date cursor-pointer"
        onClick={handleClick}
        // onChange={onChange}
        // onBlur={onBlur}
        // name={name}
      >
        <label htmlFor="files" className="block text-center mt-2">
          {filename ? <>{filename}</> : <>CV / RÉSUMÉ</>}
        </label>
        <input
          style={{ visibility: "hidden" }}
          id="files"
          type="file"
          onChange={handleFileChange} // Bind onChange directly to handleFileChange
          onBlur={handleFileBlur} // Bind onBlur directly to handleFileBlur
          name={name}
        />
      </div>
    </>
  );
};

export default FileInput;
