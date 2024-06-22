import React, { useState } from "react";

const FileInput = ({ onChange, onBlur, name, filename }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClick = () => {
    document.getElementById("files").click(); // Trigger file input click when div is clicked
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (file) {
      // Check if the file type is either docx or pdf
      if (
        file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setSelectedFile(file); // Store the selected file
        if (onChange) {
          onChange(event); // Pass the event to the onChange handler
        }
      } else {
        // Display an error message or handle invalid file type
        alert("Please select a .docx or .pdf file.");
        // Optionally clear the input and reset selectedFile state
        event.target.value = null;
        setSelectedFile(null);
      }
    }
  };

  const handleFileBlur = (event) => {
    if (onBlur) {
      onBlur(event); // Pass the event to the onBlur handler
    }
  };

  return (
    <>
      <div className="w-11/12 4xl:my-5 3xl:my-5 lg:w-[40vw] h-10 3xl:text-3xl 4xl:text-4xl 3xl:h-14 4xl:h-16 lg:h-12 text-sm lg:text-lg !p-0 focus:outline-none border-1 border-inputgrey !text-center px-3 rounded-lg focus:border-1 focus:border-Date cursor-pointer">
        <label htmlFor="files" className="block text-center mt-2">
          {selectedFile ? (
            <>{selectedFile.name}</>
          ) : (
            <>{filename ? <>{filename}</> : <>CV / RÉSUMÉ</>}</>
          )}
        </label>
        <input
          //style={{ visibility: "hidden" }}
          hidden
          id="files"
          type="file"
          onClick={handleClick}
          onChange={handleFileChange} // Bind onChange directly to handleFileChange
          onBlur={handleFileBlur} // Bind onBlur directly to handleFileBlur
          name={name}
          accept=".docx,.pdf" // Limit to .docx and .pdf files
        />
      </div>
    </>
  );
};

export default FileInput;
