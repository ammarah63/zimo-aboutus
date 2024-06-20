import FileInput from "../FileInput";
import Input from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { clearApplicant, setStep3 } from "@/redux/slices/ApplicantSlice";
import { db } from "@/firebaseConfig";
import { storage } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";


const Step3 = ({
  onNext,
  handleFormSubmit,
  handleClose,
  handleFeedback,
  opinionAdded,
}) => {
  const data = useSelector((state) => state.auth.Step1);
  const data3 = useSelector((state) => state.auth.Step3);
  const applications = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleAddopinion = () => {
    onNext();
    dispatch(
      setStep3({
        Email: data.Email,
        FullName: (data.FullName || "") + (data.LastName || ""),
        University: formik.values.university,
        Qualifications: formik.values.qualifications,
        CompletionYear: formik.values.completionYear,
        Experience: formik.values.experience,
        EmploymentStatus: formik.values.employmentStatus,
        Resume: formik.values.resume.name,
      })
    );
    console.log(formik.values);
  };

  const handleSubmitMessage = async () => {
    setLoading(true);
    try {
      // Upload resume to Firebase Storage
      const fileName = formik.values.resume.name;
      console.log("filename", fileName);
      const storageRef = ref(storage, `${data.Email}/${fileName}`);
      await uploadBytes(storageRef, formik.values.resume);
      const resumeURL = await getDownloadURL(storageRef);
      console.log("uploaded url", resumeURL);

      const { resume, ...applicationData } = applications;
      applicationData.resumeURL = resumeURL;
      await addDoc(collection(db, "Applications"), applicationData);

      console.log("Resume and other details submitted successfully");
    } catch (error) {
      console.error("Error submitting resume and other details:", error);
    } finally {
      handleFormSubmit();
      setLoading(false);
      handleClose();
      handleFeedback();
      dispatch(clearApplicant());
    }
  };

  const formik = useFormik({
    initialValues: {
      //   email: "",
      // fullName: "",
      university: (data3 && data3.University) || "",
      qualifications: (data3 && data3.Qualifications) || "",
      completionYear: (data3 && data3.CompletionYear) || "",
      experience: (data3 && data3.Experience) || "",
      employmentStatus: (data3 && data3.EmploymentStatus) || "",
      resume: (data3 && data3.Resume) || null,
    },
    validationSchema: Yup.object({
      //  email: Yup.string().email("Invalid email").required("Email is required"),
      // fullName: Yup.string().required("Full Name is required"),
      university: Yup.string().required("University is required"),
      qualifications: Yup.string().required("Qualifications is required"),
      completionYear: Yup.string().required("Year of Completion is required"),
      experience: Yup.string().required("Experience is required"),
      employmentStatus: Yup.string().required("Employment Status is required"),
      resume: Yup.mixed().required("Resume is required"),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      // onNext();
      console.log("working");
      console.log("Form values", values);

      dispatch(
        setStep3({
          Email: data.Email,
          FullName: (data.FullName || "") + (data.LastName || ""),
          University: values.university,
          Qualifications: values.qualifications,
          CompletionYear: values.completionYear,
          Experience: values.experience,
          EmploymentStatus: values.employmentStatus,
          Resume: values.resume.name,
        })
      );
      await handleSubmitMessage();
    },
  });
  return (
    <>
      {" "}
      <form onSubmit={formik.handleSubmit}>
        <div className="lg:flex justify-center text-center ml-3 lg:ml-44 pb-20">
          <div className="">
            <p className="text-center text-xl tracking-widest py-3">
              {data && data.Email}
            </p>
            <p className="text-center text-xl tracking-widest py-3">
              {data && data.FirstName} {data && data.LastName}
            </p>

            <select
              name="qualifications"
              value={formik.values.qualifications}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="custom-select w-11/12 lg:w-[40vw] tracking-widest uppercase my-2 placeholder:text-black text-sm lg:text-lg placeholder:text-sm lg:placeholder:text-lg focus:outline-none border-1 border-inputgrey text-center p-3 rounded-lg focus:border-1 focus:border-Date"
            >
              {qualifications.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="tracking-widest uppercase "
                >
                  {option.label}
                </option>
              ))}
            </select>
            {formik.touched.qualifications && formik.errors.qualifications ? (
              <div className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.qualifications}
              </div>
            ) : null}
            <div>
              {" "}
              <select
                name="completionYear"
                value={formik.values.completionYear}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="custom-select w-11/12 lg:w-[40vw] tracking-widest uppercase my-2 placeholder:text-black text-sm lg:text-lg placeholder:text-sm lg:placeholder:text-lg focus:outline-none border-1 border-inputgrey text-center p-3 rounded-lg focus:border-1 focus:border-Date"
              >
                {completionYears.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="tracking-widest uppercase "
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {formik.touched.completionYear && formik.errors.completionYear ? (
                <div className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                  {formik.errors.completionYear}
                </div>
              ) : null}
            </div>
            <Input
              name="university"
              value={formik.values.university}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="UNIVERSITY"
            />
            {formik.touched.university && formik.errors.university ? (
              <div className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.university}
              </div>
            ) : null}
            <select
              name="experience"
              value={formik.values.experience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="custom-select w-11/12 lg:w-[40vw] tracking-widest uppercase my-2 placeholder:text-black text-sm lg:text-lg placeholder:text-sm lg:placeholder:text-lg focus:outline-none border-1 border-inputgrey text-center p-3 rounded-lg focus:border-1 focus:border-Date"
            >
              {experienceOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="tracking-widest uppercase "
                >
                  {option.label}
                </option>
              ))}
            </select>
            {formik.touched.experience && formik.errors.experience ? (
              <div className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.experience}
              </div>
            ) : null}
            <div>
              <select
                name="employmentStatus"
                value={formik.values.employmentStatus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="custom-select w-11/12 lg:w-[40vw] tracking-widest uppercase my-2 placeholder:text-black text-sm lg:text-lg placeholder:text-sm lg:placeholder:text-lg focus:outline-none border-1 border-inputgrey text-center p-3 rounded-lg focus:border-1 focus:border-Date"
              >
                {employmentStatusOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="tracking-widest uppercase "
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {formik.touched.employmentStatus &&
              formik.errors.employmentStatus ? (
                <div className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                  {formik.errors.employmentStatus}
                </div>
              ) : null}
            </div>
            <div className="flex justify-center">
              <FileInput
                name="resume"
                onChange={(event) =>
                  formik.setFieldValue("resume", event.target.files[0])
                }
                filename={formik.values.resume ? formik.values.resume.name : ""}
                onBlur={formik.handleBlur}
              />
            </div>
            <p className="text-center opacity-50 text-xs lg:text-sm tracking-wide mb-2 mt-2">
              UPLOAD YOUR RÉSUMÉ IN ENGLISH AS DOCX OR PDF ONLY
            </p>
            <p className="text-center opacity-50 text-xs lg:text-sm w-[350px] lg:w-[500px] tracking-wide mb-2 mt-2">
              By proceeding, you are confirming that you agree to the
              information you have provided to be used in accordance with
              ZIMO&apos;S application processes
            </p>
          </div>
          <div className="lg:ml-1 xl:ml-20 lg:mt-52 flex justify-center lg:flex-col">
            <div className="lg:space-y-4 space-x-4 lg:space-x-0 flex lg:flex-col">
              <button
                onClick={handleAddopinion}
                className="w-32 h-32  rounded-lg bg-black text-white flex-col justify-center"
              >
                {opinionAdded && (
                  <>
                    <div className="grid grid-cols-3">
                      <div></div>
                      <div>
                        <IoCheckmark size={30} className="text-Date " />
                      </div>
                      <div></div>
                    </div>
                  </>
                )}
                <span className="text-xs opacity-40">OPTIONAL</span> <br />
                ADD SUPPORTING STATEMENT
              </button>
              <br />
              <button
                type="submit"
                className={`w-32 h-32 rounded-lg text-white ${
                  loading ? "blink" : ""
                }`}
                style={{ backgroundColor: loading ? "#BE9F56" : "black" }}
                disabled={formik.isSubmitting}
              >
                SUBMIT
              </button>
            </div>
          </div>

          <style jsx>{`
            .custom-select {
              appearance: none;
              -webkit-appearance: none;
              -moz-appearance: none;
              background-image: url("data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iYmxhY2siIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGhlaWdodD0iMWVtIiB3aWR0aD0iMWVtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMTAuODMsOTguODNsLTgwLDgwYTQsNCwwLDAsMS01LjY2LDBsLTgwLTgwYTQsNCwwLDAsMSw1LjY2LTUuNjZMMTI4LDE3MC4zNGw3Ny4xNy03Ny4xN2E0LDQsMCwxLDEsNS42Niw1LjY2WiI+PC9wYXRoPjwvc3ZnPg=="); /* Base64 encoded SVG for dropdown arrow icon */
              background-repeat: no-repeat;
              background-color: transparent;
              background-position: right 10px center;
              background-size: 30px 30px;
            }
            @keyframes blink {
              0% {
                background-color: #be9f56;
              }
              50% {
                background-color: black;
              }
              100% {
                background-color: #be9f56;
              }
            }

            .blink {
              animation: blink 2s infinite;
            }
          `}</style>
        </div>{" "}
      </form>
    </>
  );
};

export default Step3;
const employmentStatusOptions = [
  { value: "", label: "CURRENT EMPLOYMENT STATUS" },
  { value: "STUDENT", label: "STUDENT" },
  { value: "UNEMPLOYED", label: "UNEMPLOYED" },
  { value: "PART TIME", label: "EMPLOYED (PART TIME)" },
  { value: "FULL TIME", label: "EMPLOYED (FULL TIME)" },
  { value: "INTERNSHIP", label: "EMPLOYED (INTERNSHIP)" },
  { value: "OTHER", label: "OTHER" },
];
const experienceOptions = [
  { value: "", label: "EXPERIENCE" },
  { value: "NO EXPERIENCE", label: "NO EXPERIENCE" },
  { value: "LESS THAN 1 Year", label: "LESS THAN 1 YEAR" },
  { value: "1 YEARS", label: "1 YEAR" },
  { value: "2 YEARS", label: "2 YEARS" },
  { value: "3 YEARS", label: "3 YEARS" },
  { value: "4 YEARS", label: "4 YEARS" },
  { value: "5 YEARS", label: "5 YEARS" },
  { value: "6 YEARS", label: "6 YEARS" },
  { value: "7 YEARS", label: "7 YEARS" },
  { value: "MORE THAN 7 YEARS", label: "MORE THAN 7 YEARS" },
];
const completionYears = [
  { value: "", label: "YEAR OF COMPLETION" },
  { value: "2028", label: "2028" },
  { value: "2027", label: "2027" },
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2014", label: "2014" },
  { value: "2013", label: "2013" },
  { value: "2012", label: "2012" },
  { value: "2011", label: "2011" },
  { value: "2010", label: "2010" },
];
const qualifications = [
  { value: "", label: "QUALIFICATION(S)" },
  { value: "BA", label: "BA" },
  { value: "BBA", label: "BBA" },
  { value: "BSCS", label: "BSCS" },
  { value: "BSSE", label: "BSSE" },
  { value: "BSIT", label: "BSIT" },
  { value: "BFA", label: "BFA" },
  { value: "BS. HONS.", label: "BS. HONS." },
  { value: "ACCA", label: "ACCA" },
  { value: "OTHER", label: "OTHER" },
];
