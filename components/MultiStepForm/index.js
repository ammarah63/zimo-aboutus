import Image from "next/image";
import logo from "../../public/images/Group 4758.svg";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PiCaretDownThin } from "react-icons/pi";
import { PiArrowLeftThin } from "react-icons/pi";
import Form from "./Form";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { setStarts, setApplys } from "@/redux/slices/ApplicantSlice";

const MultiStepform = () => {
  const [apply, setApply] = useState(false);
  const [start, setStart] = useState(false);
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  const secondStepFormik = useFormik({
    initialValues: {
      country: "",
    },
    validationSchema: Yup.object({
      country: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      handleStart();
      setCountry(values.country);
    },
  });

  const firstStepFormik = useFormik({
    initialValues: {
      role: "",
    },
    validationSchema: Yup.object({
      role: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      handleApply();
      //  console.log(values.role);
      setRole(values.role);
      console.log("country", country);
      console.log("role", role);
    },
  });

  const handleApply = () => {
    setApply(true);
    dispatch(setApplys({ Role: firstStepFormik.values.role }));
  };
  const handleStart = () => {
    setStart(true);
    dispatch(setStarts({ Country: secondStepFormik.values.country }));
  };

  const handleCloseModal = () => {
    setApply(false);
  };

  return (
    <div className="relative p-4">
      <div className="relative">
        <p className="mt-2 ml-2 lg:ml-5 lg:mt-5 font-thin text-xl tracking-widest">
          APPLY
        </p>
        {start ? (
          <button
            onClick={() => setStart(false)}
            className="flex ml-2 mt-2 font-thin"
          >
            <PiArrowLeftThin
              className="m-1 mt-1 lg:mt-2 h-3 w-3 lg:h-6 lg:w-6"
              size={30}
            />
            <p className="text-xl my-1">BACK</p>
          </button>
        ) : (
          <></>
        )}
        {start ? (
          <>
            <form onSubmit={firstStepFormik.handleSubmit}>
              <div className="lg:relative lg:flex items-center justify-center lg:ml-32 pt-14">
                <div className="border border-Date rounded-2xl w-full lg:w-[50vw] pb-10 lg:pb-0 p-5">
                  <p className="text-base tracking-widest my-8 text-center">
                    START YOUR APPLICATION
                  </p>
                  <div className="flex flex-col items-center">
                    <Image
                      src={logo}
                      width={100}
                      height={100}
                      className="max-w-30 lg:min-w-64 mt-8"
                      alt="Logo"
                    />
                    <p className="text-sm lg:text-6xl !font-thin text-center tracking-widest mt-4">
                      CAREERS
                    </p>

                    <>
                      <select
                        name="role"
                        onChange={firstStepFormik.handleChange}
                        onBlur={firstStepFormik.handleBlur}
                        value={firstStepFormik.values.role}
                        className="custom-select border-2 border-gray focus:border-Date focus:outline-none w-full active:border-gray mt-14 text-center px-6 mb-5 tracking-widest p-3 lg:w-8/12 xl:w-7/12 rounded-lg"
                      >
                        <option value="">CHOOSE YOUR ROLE FIELD</option>
                        {roles.map((role) => (
                          <option
                            key={role.label}
                            className="tracking-widest uppercase "
                            value={role.value}
                          >
                            {role.label}
                          </option>
                        ))}
                      </select>
                      {firstStepFormik.touched.role &&
                      firstStepFormik.errors.role ? (
                        <div className="text-[red] p-0 -mt-5">
                          {firstStepFormik.errors.role}
                        </div>
                      ) : null}
                    </>
                  </div>
                </div>
                <div className="lg:hidden flex justify-center">
                  <button
                    //    onClick={handleApply}
                    type="submit"
                    className=" w-32 h-32 rounded-lg bg-black text-white -translate-y-1/3 lg:translate-y-20 lg:-translate-x-16"
                  >
                    APPLY
                  </button>
                </div>
                <button
                  //    onClick={handleApply}
                  type="submit"
                  className="hidden lg:block w-32 h-32 rounded-lg bg-black text-white lg:translate-y-20 lg:-translate-x-16"
                >
                  APPLY
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={secondStepFormik.handleSubmit}>
              <div className="lg:relative lg:flex items-center justify-center lg:ml-32 pt-14">
                <div className="border border-Date rounded-2xl w-full lg:w-[50vw] p-2 pb-10 lg:pb-0 lg:p-5">
                  <p className="text-base tracking-widest my-8 text-center">
                    START YOUR APPLICATION
                  </p>
                  <div className="flex flex-col items-center">
                    <Image
                      src={logo}
                      width={100}
                      height={100}
                      className="max-w-30 lg:min-w-64 lg:mt-8"
                      alt="Logo"
                    />
                    <h1 className="sm text-xl lg:text-6xl !font-thin text-center tracking-widest mt-4">
                      CAREERS
                    </h1>

                    <>
                      <select
                        name="country"
                        onChange={secondStepFormik.handleChange}
                        onBlur={secondStepFormik.handleBlur}
                        value={secondStepFormik.values.country}
                        className="custom-select uppercase border-2 border-gray focus:border-Date focus:outline-none active:border-gray mt-10 lg:mt-14 text-center px-6 mb-5 tracking-widest p-3 w-11/12 lg:w-7/12 rounded-lg"
                      >
                        <option value="">SELECT YOUR COUNTRY</option>
                        {countryOptions.map((country) => (
                          <option
                            key={role.label}
                            className="tracking-widest uppercase capatalize"
                            value={country.value}
                          >
                            {country.label}
                          </option>
                        ))}
                        {/* Add actual options here */}
                      </select>
                      {secondStepFormik.touched.country &&
                      secondStepFormik.errors.country ? (
                        <div className="text-[red] p-0 -mt-5">
                          {secondStepFormik.errors.country}
                        </div>
                      ) : null}
                    </>
                  </div>
                </div>
                <div className="lg:hidden flex justify-center ">
                  <button
                    // onClick={handleStart}
                    type="submit"
                    className=" w-32 h-32 rounded-lg bg-black text-white -translate-y-1/3 lg:translate-y-20 lg:-translate-x-16"
                  >
                    START
                  </button>
                </div>
                <button
                  // onClick={handleStart}
                  type="submit"
                  className="hidden lg:block w-32 h-32 rounded-lg bg-black text-white lg:translate-y-20 lg:-translate-x-16"
                >
                  START
                </button>
              </div>
            </form>
          </>
        )}
        <style jsx>{`
          .custom-select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-image: url("data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iYmxhY2siIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGhlaWdodD0iMWVtIiB3aWR0aD0iMWVtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMTAuODMsOTguODNsLTgwLDgwYTQsNCwwLDAsMS01LjY2LDBsLTgwLTgwYTQsNCwwLDAsMSw1LjY2LTUuNjZMMTI4LDE3MC4zNGw3Ny4xNy03Ny4xN2E0LDQsMCwxLDEsNS42Niw1LjY2WiI+PC9wYXRoPjwvc3ZnPg=="); /* Base64 encoded SVG for dropdown arrow icon */
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 30px 30px;
          }
        `}</style>
      </div>
      <div className="absolute top-0 w-full z-50  mb-96">
        {" "}
        {apply && <Form onClose={handleCloseModal} />}
      </div>
      <Footer />
    </div>
  );
};

export default MultiStepform;

const roles = [
  { value: "", label: "CHOOSE YOUR ROLE (FIELD)" },
  { value: "PROJECT COORDINATOR", label: "PROJECT COORDINATOR" },
  { value: "FRONTEND NEXT JS", label: "FRONTEND NEXT JS" },
  { value: "BACKEND LARAVEL & NODE JS", label: "BACKEND LARAVEL & NODE JS" },
  { value: "DEVOPS ENGINEER", label: "DEVOPS ENGINEER" },
  { value: "REACT NATIVE DEVELOPER", label: "REACT NATIVE DEVELOPER" },
  { value: "GRAPHIC DESIGNER", label: "GRAPHIC DESIGNER" },
  { value: "SEO EXPERT", label: "SEO EXPERT" },
  { value: "MACHINE LEARNING", label: "MACHINE LEARNING" },
  { value: "VIDEO EDITOR & ANIMATION", label: "VIDEO EDITOR & ANIMATION" },
  { value: "SOCIAL MEDIA MANAGER", label: "SOCIAL MEDIA MANAGER" },
  { value: "CYBER SECURITY", label: "CYBER SECURITY" },
  { value: "UNITY 3D DEVELOPER", label: "UNITY 3D DEVELOPER" },
  { value: "UNREAL ENGINE EXPERT", label: "UNREAL ENGINE EXPERT" },
  { value: "INTERIOR DESIGNER", label: "INTERIOR DESIGNER" },
  {
    value: "BUSINESS DEVELOPMENT MANAGER",
    label: "BUSINESS DEVELOPMENT MANAGER",
  },
  {
    value: "TALENT RECRUITMENT SPECIALIST",
    label: "TALENT RECRUITMENT SPECIALIST",
  },
  { value: "Software Quality Assurance", label: "Software Quality Assurance" },
  { value: "GAME PROGRAMMING", label: "GAME PROGRAMMING" },
  { value: "GAME DESIGN", label: "GAME DESIGN" },
  { value: "COMMERCIAL ", label: "COMMERCIAL " },
  { value: "HUMAN RESOURCES  (HR)", label: "HUMAN RESOURCES  (HR)" },
  { value: "BRAND AMBASSADOR", label: "BRAND AMBASSADOR" },
  { value: "FLUTTER DEVELOPER", label: "FLUTTER DEVELOPER" },
  { value: "VOLUNTEER", label: "VOLUNTEER" },
  { value: "MERN STACK DEVELOPER", label: "MERN STACK DEVELOPER" },
  { value: "DATA SCIENCE", label: "DATA SCIENCE" },
  { value: "COMPUTER VISION", label: "COMPUTER VISION" },
  { value: "FRONTEND REACT JS", label: "FRONTEND REACT JS" },
  { value: "UI / UX DESIGNER", label: "UI / UX DESIGNER" },
  { value: "WEB DEVELOPER", label: "WEB DEVELOPER" },
  { value: "PSYCHOLOGY", label: "PSYCHOLOGY" },
];

const countryOptions = [
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Åland Islands", label: "Åland Islands" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "American Samoa", label: "American Samoa" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Anguilla", label: "Anguilla" },
  { value: "Antarctica", label: "Antarctica" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Aruba", label: "Aruba" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bermuda", label: "Bermuda" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Bouvet Island", label: "Bouvet Island" },
  { value: "Brazil", label: "Brazil" },
  {
    value: "British Indian Ocean Territory",
    label: "British Indian Ocean Territory",
  },
  { value: "Brunei Darussalam", label: "Brunei Darussalam" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Cape Verde", label: "Cape Verde" },
  { value: "Cayman Islands", label: "Cayman Islands" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Christmas Island", label: "Christmas Island" },
  { value: "Cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Congo", label: "Congo" },
  {
    value: "Congo, The Democratic Republic of The",
    label: "Congo, The Democratic Republic of The",
  },
  { value: "Cook Islands", label: "Cook Islands" },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Cote D'ivoire", label: "Cote D'ivoire" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Curaçao", label: "Curaçao" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Ethiopia", label: "Ethiopia" },
  {
    value: "Falkland Islands (Malvinas)",
    label: "Falkland Islands (Malvinas)",
  },
  { value: "Faroe Islands", label: "Faroe Islands" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "French Guiana", label: "French Guiana" },
  { value: "French Polynesia", label: "French Polynesia" },
  {
    value: "French Southern Territories",
    label: "French Southern Territories",
  },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Gibraltar", label: "Gibraltar" },
  { value: "Greece", label: "Greece" },
  { value: "Greenland", label: "Greenland" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guadeloupe", label: "Guadeloupe" },
  { value: "Guam", label: "Guam" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guernsey", label: "Guernsey" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guinea-bissau", label: "Guinea-bissau" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  {
    value: "Heard Island and Mcdonald Islands",
    label: "Heard Island and Mcdonald Islands",
  },
  {
    value: "Holy See (Vatican City State)",
    label: "Holy See (Vatican City State)",
  },
  { value: "Honduras", label: "Honduras" },
  { value: "Hong Kong", label: "Hong Kong" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Iran, Islamic Republic of", label: "Iran, Islamic Republic of" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Isle of Man", label: "Isle of Man" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jersey", label: "Jersey" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kiribati", label: "Kiribati" },
  {
    value: "Korea, Democratic People's Republic of",
    label: "Korea, Democratic People's Republic of",
  },
  { value: "Korea, Republic of", label: "Korea, Republic of" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan" },
  {
    value: "Lao People's Democratic Republic",
    label: "Lao People's Democratic Republic",
  },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libyan Arab Jamahiriya", label: "Libyan Arab Jamahiriya" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Macao", label: "Macao" },
  {
    value: "Macedonia, The Former Yugoslav Republic of",
    label: "Macedonia, The Former Yugoslav Republic of",
  },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malawi", label: "Malawi" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Marshall Islands", label: "Marshall Islands" },
  { value: "Martinique", label: "Martinique" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mayotte", label: "Mayotte" },
  { value: "Mexico", label: "Mexico" },
  {
    value: "Micronesia, Federated States of",
    label: "Micronesia, Federated States of",
  },
  { value: "Moldova, Republic of", label: "Moldova, Republic of" },
  { value: "Monaco", label: "Monaco" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar", label: "Myanmar" },
  { value: "Namibia", label: "Namibia" },
  { value: "Nauru", label: "Nauru" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "New Caledonia", label: "New Caledonia" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Niue", label: "Niue" },
  { value: "Norfolk Island", label: "Norfolk Island" },
  { value: "Northern Mariana Islands", label: "Northern Mariana Islands" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palau", label: "Palau" },
  {
    value: "Palestinian Territory, Occupied",
    label: "Palestinian Territory, Occupied",
  },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Philippines", label: "Philippines" },
  { value: "Pitcairn", label: "Pitcairn" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Puerto Rico", label: "Puerto Rico" },
  { value: "Qatar", label: "Qatar" },
  { value: "Reunion", label: "Reunion" },
  { value: "Romania", label: "Romania" },
  { value: "Russia", label: "Russia" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "Saint Helena", label: "Saint Helena" },
  { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "Saint Lucia", label: "Saint Lucia" },
  { value: "Saint Pierre and Miquelon", label: "Saint Pierre and Miquelon" },
  {
    value: "Saint Vincent and The Grenadines",
    label: "Saint Vincent and The Grenadines",
  },
  { value: "Samoa", label: "Samoa" },
  { value: "San Marino", label: "San Marino" },
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Serbia", label: "Serbia" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  {
    value: "South Georgia and The South Sandwich Islands",
    label: "South Georgia and The South Sandwich Islands",
  },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Svalbard and Jan Mayen", label: "Svalbard and Jan Mayen" },
  { value: "Eswatini", label: "Eswatini" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syrian Arab Republic", label: "Syrian Arab Republic" },
  { value: "Taiwan (ROC)", label: "Taiwan (ROC)" },
  { value: "Tajikistan", label: "Tajikistan" },
  {
    value: "Tanzania, United Republic of",
    label: "Tanzania, United Republic of",
  },
  { value: "Thailand", label: "Thailand" },
  { value: "Timor-leste", label: "Timor-leste" },
  { value: "Togo", label: "Togo" },
  { value: "Tokelau", label: "Tokelau" },
  { value: "Tonga", label: "Tonga" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands" },
  { value: "Tuvalu", label: "Tuvalu" },
  { value: "Uganda", label: "Uganda" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States", label: "United States" },
  {
    value: "United States Minor Outlying Islands",
    label: "United States Minor Outlying Islands",
  },
  { value: "Uruguay", label: "Uruguay" },
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "Vanuatu", label: "Vanuatu" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Vietnam", label: "Vietnam" },
  { value: "Virgin Islands, British", label: "Virgin Islands, British" },
  { value: "Virgin Islands, U.S.", label: "Virgin Islands, U.S." },
  { value: "Wallis and Futuna", label: "Wallis and Futuna" },
  { value: "Western Sahara", label: "Western Sahara" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zambia", label: "Zambia" },
  { value: "Zimbabwe", label: "Zimbabwe" },
];
