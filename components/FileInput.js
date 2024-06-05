const FileInput = () => {
  const handleClick = () => {
    document.getElementById("files").click(); // Trigger file input click when div is clicked
  };

  return (
    <>
      <div
        className="w-[40vw] text-lg !p-0 focus:outline-none border-1 border-inputgrey !text-center px-3 rounded-lg focus:border-1 focus:border-Date cursor-pointer"
        onClick={handleClick}
      >
        <label htmlFor="files" className="block text-center">
          CV / RÉSUMÉ
        </label>
        <input style={{ visibility: "hidden" }} id="files" type="file" />
      </div>
    </>
  );
};

export default FileInput;
