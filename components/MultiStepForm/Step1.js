import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { setStep1 } from "@/redux/slices/ApplicantSlice";
import Select from "react-select";

const Step1 = ({ onNext }) => {
  const countryName = useSelector((state) => state.auth.Start.Country);
  const data = useSelector((state) => state.auth.Step1);
  const [countryCode, setCountryCode] = useState("");
  const dispatch = useDispatch();

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 55,
      minHeight: 55,
      borderRadius: 10,
      borderColor: "#aeb2b9",
      "@media screen and (max-width: 768px)": {
        height: 45,
        minHeight: 45,
      },
      "@media screen and (max-width: 1920px)": {
        height: 60,
        minHeight: 60,
        width: 150,
        minWidth: 150,
      },
      "@media screen and (max-width: 2560px)": {
        height: 65,
        minHeight: 65,
        width: 180,
        minWidth: 180,
      },
    }),
  };
  const formik = useFormik({
    initialValues: {
      email: (data && data.Email) || "",
      confirmEmail: (data && data.ConfirmEmail) || "",
      firstName: (data && data.FirstName) || "",
      lastName: (data && data.LastName) || "",
      birthDate: (data && data.BirthDate) || "",
      phoneNumber: (data && data.PhoneNumber) || "",
      zarCode: (data && data.ZarCode) || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("email"), null], "Emails must match")
        .required("Required"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      birthDate: Yup.date().required("Required"),
      //  country: Yup.string().required("Required"),
      // phonecode: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
      zarCode: Yup.string(),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      onNext();
      console.log("Form values", values);
      dispatch(
        setStep1({
          Email: values.email,
          ConfirmEmail: values.confirmEmail,
          FirstName: values.firstName,
          LastName: values.lastName,
          BirthDate: values.birthDate,
          //  PhoneCode: phoneNumber,
          PhoneNumber: values.phoneNumber,
          ZarCode: values.zarCode,
        })
      );
    },
  });

  const countryPlaceholder = countrycode.find(
    (option) => option.name === countryName
  );

  // Construct the JSX element for the placeholder
  const placeholderElement = countryPlaceholder && (
    <div className="text-sm  3xl:text-3xl 4xl:text-4xl flex">
      <img
        src={`https://flagcdn.com/${countryPlaceholder.alpha2.toLowerCase()}.svg`}
        alt={`Flag of ${countryPlaceholder.alpha2}`}
        className="h-5 w-5 mr-2  3xl:h-10 3xl:w-10  4xl:h-10 4xl:w-10"
      />
      {countryPlaceholder.numeric}
    </div>
  );

  const countryOptions = countrycode.map((option) => ({
    value: option.numeric,
    label: (
      <div className="text-sm flex 3xl:text-3xl 4xl:text-4xl">
        <img
          src={`https://flagcdn.com/${option.alpha2.toLowerCase()}.svg`}
          alt={`Flag of ${option.alpha2}`}
          className="h-5 w-5 3xl:h-10 3xl:w-10  4xl:h-10 4xl:w-10 mr-2"
        />
        {option.numeric}
      </div>
    ),
  }));

  const handleCountryChange = (selectedOption) => {
    const selectedCountry = selectedOption.label.props.children[1];
    const countryCode = countrycode.find(
      (country) => country.name === selectedCountry
    ).numeric;
    setCountryCode(countryCode);
    formik.setFieldValue("phonecode", countryCode);
  };

  useEffect(() => {
    console.log(countryName);
    const country = countrycode.find((country) => country.name === countryName);
    if (country) {
      setCountryCode(country.numeric);
    }
  }, [countryName]);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="lg:flex justify-center text-center ml-3 lg:ml-44 pb-20">
          <div className="lg:mb-20">
            <Input
              placeholder={"EMAIL ADDRESS"}
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.email}
              </p>
            ) : null}

            <Input
              placeholder="CONFIRM EMAIL ADDRESS"
              name="confirmEmail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmEmail}
            />
            {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.confirmEmail}
              </p>
            ) : null}

            <Input
              placeholder="FIRST NAME"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-[red] text-xs lg:text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.firstName}
              </p>
            ) : null}
            <p className="text-center opacity-50 3xl:text-xl  4xl:text-2xl text-sm tracking-wide -mt-2 mb-2">
              Use your legal name as it appears on your official documents
            </p>
            <Input
              placeholder="LAST NAME (INCLUDING MIDDLE NAME)"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.lastName}
              </p>
            ) : null}
            <Input
              type="date"
              name="birthDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthDate}
            />
            {formik.touched.birthDate && formik.errors.birthDate ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.birthDate}
              </p>
            ) : null}
            <Input placeholder={countryName} />

            <div className="grid grid-cols-3">
              <div className="flex items-center ps-4 lg:ps-0 3xl:ps-6 4xl:ps-8">
                <Select
                  options={countryOptions}
                  //onChange={handleCountryChange}
                  value={countryOptions.find(
                    (option) => option.value === formik.values.phonecode
                  )}
                  placeholder={placeholderElement}
                  styles={customStyles}
                />
              </div>
              <div className="col-span-2 px-2  lg:-ms-14 4xl:-ms-24">
                <input
                  placeholder="PHONE NUMBER"
                  name="phoneNumber"
                  type="number"
                  className="w-11/12 lg:w-[30vw] 3xl:text-3xl 3xl:placeholder:text-3xl tracking-widest uppercase my-2 placeholder:text-black text-sm lg:text-lg placeholder:text-sm lg:placeholder:text-lg focus:outline-none border-1 border-inputgrey text-center p-3 rounded-lg focus:border-1 focus:border-Date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
              </div>
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.phoneNumber}
              </p>
            ) : null}

            <p className="text-center opacity-50 3xl:text-xl text-xs lg:text-sm tracking-wide -mb-2 mt-2">
              ZIMO AMBASSADOR REFERRAL CODE (ZAR CODE)
            </p>
            <Input
              placeholder="ZAR CODE (OPTIONAL)"
              name="zarCode"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zarCode}
            />
            {formik.touched.zarCode && formik.errors.zarCode ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.zarCode}
              </p>
            ) : null}
          </div>
          <div className="lg:mt-96  -ms-24 lg:ms-0">
            <button
              type="submit"
              className="w-32 h-32 ml-20 lg:mt-20 4xl:mt-72 3xl:mt-72 3xl:w-40 3xl:h-40 3xl:text-2xl rounded-lg bg-black text-white "
            >
              CONTINUE
            </button>
          </div>
        </div>
      </form>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
};

export default Step1;

const countrycode = [
  { alpha2: "AF", numeric: "+004", name: "Afghanistan" },
  { alpha2: "AX", numeric: "+248", name: "Åland Islands" },
  { alpha2: "AL", numeric: "+008", name: "Albania" },
  { alpha2: "DZ", numeric: "+012", name: "Algeria" },
  { alpha2: "AS", numeric: "+016", name: "American Samoa" },
  { alpha2: "AD", numeric: "+020", name: "Andorra" },
  { alpha2: "AO", numeric: "+024", name: "Angola" },
  { alpha2: "AI", numeric: "+660", name: "Anguilla" },
  { alpha2: "AQ", numeric: "+010", name: "Antarctica" },
  { alpha2: "AG", numeric: "+028", name: "Antigua and Barbuda" },
  { alpha2: "AR", numeric: "+032", name: "Argentina" },
  { alpha2: "AM", numeric: "+051", name: "Armenia" },
  { alpha2: "AW", numeric: "+533", name: "Aruba" },
  { alpha2: "AU", numeric: "+036", name: "Australia" },
  { alpha2: "AT", numeric: "+040", name: "Austria" },
  { alpha2: "AZ", numeric: "+031", name: "Azerbaijan" },
  { alpha2: "BS", numeric: "+044", name: "Bahamas" },
  { alpha2: "BH", numeric: "+048", name: "Bahrain" },
  { alpha2: "BD", numeric: "+050", name: "Bangladesh" },
  { alpha2: "BB", numeric: "+052", name: "Barbados" },
  { alpha2: "BY", numeric: "+112", name: "Belarus" },
  { alpha2: "BE", numeric: "+056", name: "Belgium" },
  { alpha2: "BZ", numeric: "+084", name: "Belize" },
  { alpha2: "BJ", numeric: "+204", name: "Benin" },
  { alpha2: "BM", numeric: "+060", name: "Bermuda" },
  { alpha2: "BT", numeric: "+064", name: "Bhutan" },
  { alpha2: "BO", numeric: "+068", name: "Bolivia (Plurinational State of)" },
  { alpha2: "BQ", numeric: "+535", name: "Bonaire, Sint Eustatius and Saba" },
  { alpha2: "BA", numeric: "+070", name: "Bosnia and Herzegovina" },
  { alpha2: "BW", numeric: "+072", name: "Botswana" },
  { alpha2: "BV", numeric: "+074", name: "Bouvet Island" },
  { alpha2: "BR", numeric: "+076", name: "Brazil" },
  { alpha2: "IO", numeric: "+086", name: "British Indian Ocean Territory" },
  { alpha2: "BN", numeric: "+096", name: "Brunei Darussalam" },
  { alpha2: "BG", numeric: "+100", name: "Bulgaria" },
  { alpha2: "BF", numeric: "+854", name: "Burkina Faso" },
  { alpha2: "BI", numeric: "+108", name: "Burundi" },
  { alpha2: "CV", numeric: "+132", name: "Cabo Verde" },
  { alpha2: "KH", numeric: "+116", name: "Cambodia" },
  { alpha2: "CM", numeric: "+120", name: "Cameroon" },
  { alpha2: "CA", numeric: "+124", name: "Canada" },
  { alpha2: "KY", numeric: "+136", name: "Cayman Islands" },
  { alpha2: "CF", numeric: "+140", name: "Central African Republic" },
  { alpha2: "TD", numeric: "+148", name: "Chad" },
  { alpha2: "CL", numeric: "+152", name: "Chile" },
  { alpha2: "CN", numeric: "+156", name: "China" },
  { alpha2: "CX", numeric: "+162", name: "Christmas Island" },
  { alpha2: "CC", numeric: "+166", name: "Cocos (Keeling) Islands" },
  { alpha2: "CO", numeric: "+170", name: "Colombia" },
  { alpha2: "KM", numeric: "+174", name: "Comoros" },
  { alpha2: "CG", numeric: "+178", name: "Congo" },
  { alpha2: "CD", numeric: "+180", name: "Congo (Democratic Republic of the)" },
  { alpha2: "CK", numeric: "+184", name: "Cook Islands" },
  { alpha2: "CR", numeric: "+188", name: "Costa Rica" },
  { alpha2: "CI", numeric: "+384", name: "Côte d'Ivoire" },
  { alpha2: "HR", numeric: "+191", name: "Croatia" },
  { alpha2: "CU", numeric: "+192", name: "Cuba" },
  { alpha2: "CW", numeric: "+531", name: "Curaçao" },
  { alpha2: "CY", numeric: "+196", name: "Cyprus" },
  { alpha2: "CZ", numeric: "+203", name: "Czech Republic" },
  { alpha2: "DK", numeric: "+208", name: "Denmark" },
  { alpha2: "DJ", numeric: "+262", name: "Djibouti" },
  { alpha2: "DM", numeric: "+212", name: "Dominica" },
  { alpha2: "DO", numeric: "+214", name: "Dominican Republic" },
  { alpha2: "EC", numeric: "+218", name: "Ecuador" },
  { alpha2: "EG", numeric: "+818", name: "Egypt" },
  { alpha2: "SV", numeric: "+222", name: "El Salvador" },
  { alpha2: "GQ", numeric: "+226", name: "Equatorial Guinea" },
  { alpha2: "ER", numeric: "+232", name: "Eritrea" },
  { alpha2: "EE", numeric: "+233", name: "Estonia" },
  { alpha2: "SZ", numeric: "+748", name: "Eswatini" },
  { alpha2: "ET", numeric: "+231", name: "Ethiopia" },
  { alpha2: "FK", numeric: "+238", name: "Falkland Islands (Malvinas)" },
  { alpha2: "FO", numeric: "+234", name: "Faroe Islands" },
  { alpha2: "FJ", numeric: "+242", name: "Fiji" },
  { alpha2: "FI", numeric: "+246", name: "Finland" },
  { alpha2: "FR", numeric: "+250", name: "France" },
  { alpha2: "GF", numeric: "+254", name: "French Guiana" },
  { alpha2: "PF", numeric: "+258", name: "French Polynesia" },
  { alpha2: "TF", numeric: "+260", name: "French Southern Territories" },
  { alpha2: "GA", numeric: "+266", name: "Gabon" },
  { alpha2: "GM", numeric: "+270", name: "Gambia" },
  { alpha2: "GE", numeric: "+268", name: "Georgia" },
  { alpha2: "DE", numeric: "+276", name: "Germany" },
  { alpha2: "GH", numeric: "+288", name: "Ghana" },
  { alpha2: "GI", numeric: "+292", name: "Gibraltar" },
  { alpha2: "GR", numeric: "+300", name: "Greece" },
  { alpha2: "GL", numeric: "+304", name: "Greenland" },
  { alpha2: "GD", numeric: "+308", name: "Grenada" },
  { alpha2: "GP", numeric: "+312", name: "Guadeloupe" },
  { alpha2: "GU", numeric: "+316", name: "Guam" },
  { alpha2: "GT", numeric: "+320", name: "Guatemala" },
  { alpha2: "GG", numeric: "+831", name: "Guernsey" },
  { alpha2: "GN", numeric: "+324", name: "Guinea" },
  { alpha2: "GW", numeric: "+624", name: "Guinea-Bissau" },
  { alpha2: "GY", numeric: "+328", name: "Guyana" },
  { alpha2: "HT", numeric: "+332", name: "Haiti" },
  { alpha2: "HM", numeric: "+334", name: "Heard Island and McDonald Islands" },
  { alpha2: "VA", numeric: "+336", name: "Holy See" },
  { alpha2: "HN", numeric: "+340", name: "Honduras" },
  { alpha2: "HK", numeric: "+344", name: "Hong Kong" },
  { alpha2: "HU", numeric: "+348", name: "Hungary" },
  { alpha2: "IS", numeric: "+352", name: "Iceland" },
  { alpha2: "IN", numeric: "+356", name: "India" },
  { alpha2: "ID", numeric: "+360", name: "Indonesia" },
  { alpha2: "IR", numeric: "+364", name: "Iran (Islamic Republic of)" },
  { alpha2: "IQ", numeric: "+368", name: "Iraq" },
  { alpha2: "IE", numeric: "+372", name: "Ireland" },
  { alpha2: "IM", numeric: "+833", name: "Isle of Man" },
  { alpha2: "IL", numeric: "+376", name: "Israel" },
  { alpha2: "IT", numeric: "+380", name: "Italy" },
  { alpha2: "JM", numeric: "+388", name: "Jamaica" },
  { alpha2: "JP", numeric: "+392", name: "Japan" },
  { alpha2: "JE", numeric: "+832", name: "Jersey" },
  { alpha2: "JO", numeric: "+400", name: "Jordan" },
  { alpha2: "KZ", numeric: "+398", name: "Kazakhstan" },
  { alpha2: "KE", numeric: "+404", name: "Kenya" },
  { alpha2: "KI", numeric: "+296", name: "Kiribati" },
  {
    alpha2: "KP",
    numeric: "+408",
    name: "Korea (Democratic People's Republic of)",
  },
  { alpha2: "KR", numeric: "+410", name: "Korea (Republic of)" },
  { alpha2: "KW", numeric: "+414", name: "Kuwait" },
  { alpha2: "KG", numeric: "+417", name: "Kyrgyzstan" },
  { alpha2: "LA", numeric: "+418", name: "Lao People's Democratic Republic" },
  { alpha2: "LV", numeric: "+428", name: "Latvia" },
  { alpha2: "LB", numeric: "+422", name: "Lebanon" },
  { alpha2: "LS", numeric: "+426", name: "Lesotho" },
  { alpha2: "LR", numeric: "+430", name: "Liberia" },
  { alpha2: "LY", numeric: "+434", name: "Libya" },
  { alpha2: "LI", numeric: "+438", name: "Liechtenstein" },
  { alpha2: "LT", numeric: "+440", name: "Lithuania" },
  { alpha2: "LU", numeric: "+442", name: "Luxembourg" },
  { alpha2: "MO", numeric: "+446", name: "Macao" },
  { alpha2: "MG", numeric: "+450", name: "Madagascar" },
  { alpha2: "MW", numeric: "+454", name: "Malawi" },
  { alpha2: "MY", numeric: "+458", name: "Malaysia" },
  { alpha2: "MV", numeric: "+462", name: "Maldives" },
  { alpha2: "ML", numeric: "+466", name: "Mali" },
  { alpha2: "MT", numeric: "+470", name: "Malta" },
  { alpha2: "MH", numeric: "+584", name: "Marshall Islands" },
  { alpha2: "MQ", numeric: "+474", name: "Martinique" },
  { alpha2: "MR", numeric: "+478", name: "Mauritania" },
  { alpha2: "MU", numeric: "+480", name: "Mauritius" },
  { alpha2: "YT", numeric: "+175", name: "Mayotte" },
  { alpha2: "MX", numeric: "+484", name: "Mexico" },
  { alpha2: "FM", numeric: "+583", name: "Micronesia (Federated States of)" },
  { alpha2: "MD", numeric: "+498", name: "Moldova (Republic of)" },
  { alpha2: "MC", numeric: "+492", name: "Monaco" },
  { alpha2: "MN", numeric: "+496", name: "Mongolia" },
  { alpha2: "ME", numeric: "+499", name: "Montenegro" },
  { alpha2: "MS", numeric: "+500", name: "Montserrat" },
  { alpha2: "MA", numeric: "+504", name: "Morocco" },
  { alpha2: "MZ", numeric: "+508", name: "Mozambique" },
  { alpha2: "MM", numeric: "+104", name: "Myanmar" },
  { alpha2: "NA", numeric: "+516", name: "Namibia" },
  { alpha2: "NR", numeric: "+520", name: "Nauru" },
  { alpha2: "NP", numeric: "+524", name: "Nepal" },
  { alpha2: "NL", numeric: "+528", name: "Netherlands" },
  { alpha2: "NC", numeric: "+540", name: "New Caledonia" },
  { alpha2: "NZ", numeric: "+554", name: "New Zealand" },
  { alpha2: "NI", numeric: "+558", name: "Nicaragua" },
  { alpha2: "NE", numeric: "+562", name: "Niger" },
  { alpha2: "NG", numeric: "+566", name: "Nigeria" },
  { alpha2: "NU", numeric: "+570", name: "Niue" },
  { alpha2: "NF", numeric: "+574", name: "Norfolk Island" },
  { alpha2: "MK", numeric: "+807", name: "North Macedonia" },
  { alpha2: "MP", numeric: "+580", name: "Northern Mariana Islands" },
  { alpha2: "NO", numeric: "+578", name: "Norway" },
  { alpha2: "OM", numeric: "+512", name: "Oman" },
  { alpha2: "PK", numeric: "+92", name: "Pakistan" },
  { alpha2: "PW", numeric: "+585", name: "Palau" },
  { alpha2: "PS", numeric: "+275", name: "Palestine, State of" },
  { alpha2: "PA", numeric: "+591", name: "Panama" },
  { alpha2: "PG", numeric: "+598", name: "Papua New Guinea" },
  { alpha2: "PY", numeric: "+600", name: "Paraguay" },
  { alpha2: "PE", numeric: "+604", name: "Peru" },
  { alpha2: "PH", numeric: "+608", name: "Philippines" },
  { alpha2: "PN", numeric: "+612", name: "Pitcairn" },
  { alpha2: "PL", numeric: "+616", name: "Poland" },
  { alpha2: "PT", numeric: "+620", name: "Portugal" },
  { alpha2: "PR", numeric: "+630", name: "Puerto Rico" },
  { alpha2: "QA", numeric: "+634", name: "Qatar" },
  { alpha2: "RE", numeric: "+638", name: "Réunion" },
  { alpha2: "RO", numeric: "+642", name: "Romania" },
  { alpha2: "RU", numeric: "+643", name: "Russian Federation" },
  { alpha2: "RW", numeric: "+646", name: "Rwanda" },
  { alpha2: "BL", numeric: "+652", name: "Saint Barthélemy" },
  {
    alpha2: "SH",
    numeric: "+654",
    name: "Saint Helena, Ascension and Tristan da Cunha",
  },
  { alpha2: "KN", numeric: "+659", name: "Saint Kitts and Nevis" },
  { alpha2: "LC", numeric: "+662", name: "Saint Lucia" },
  { alpha2: "MF", numeric: "+663", name: "Saint Martin (French part)" },
  { alpha2: "PM", numeric: "+666", name: "Saint Pierre and Miquelon" },
  { alpha2: "VC", numeric: "+670", name: "Saint Vincent and the Grenadines" },
  { alpha2: "WS", numeric: "+882", name: "Samoa" },
  { alpha2: "SM", numeric: "+674", name: "San Marino" },
  { alpha2: "ST", numeric: "+678", name: "Sao Tome and Principe" },
  { alpha2: "SA", numeric: "+682", name: "Saudi Arabia" },
  { alpha2: "SN", numeric: "+686", name: "Senegal" },
  { alpha2: "RS", numeric: "+688", name: "Serbia" },
  { alpha2: "SC", numeric: "+690", name: "Seychelles" },
  { alpha2: "SL", numeric: "+694", name: "Sierra Leone" },
  { alpha2: "SG", numeric: "+702", name: "Singapore" },
  { alpha2: "SX", numeric: "+534", name: "Sint Maarten (Dutch part)" },
  { alpha2: "SK", numeric: "+703", name: "Slovakia" },
  { alpha2: "SI", numeric: "+705", name: "Slovenia" },
  { alpha2: "SB", numeric: "+090", name: "Solomon Islands" },
  { alpha2: "SO", numeric: "+706", name: "Somalia" },
  { alpha2: "ZA", numeric: "+710", name: "South Africa" },
  {
    alpha2: "GS",
    numeric: "+239",
    name: "South Georgia and the South Sandwich Islands",
  },
  { alpha2: "SS", numeric: "+728", name: "South Sudan" },
  { alpha2: "ES", numeric: "+724", name: "Spain" },
  { alpha2: "LK", numeric: "+144", name: "Sri Lanka" },
  { alpha2: "SD", numeric: "+729", name: "Sudan" },
  { alpha2: "SR", numeric: "+740", name: "Suriname" },
  { alpha2: "SJ", numeric: "+744", name: "Svalbard and Jan Mayen" },
  { alpha2: "SE", numeric: "+752", name: "Sweden" },
  { alpha2: "CH", numeric: "+756", name: "Switzerland" },
  { alpha2: "SY", numeric: "+760", name: "Syrian Arab Republic" },
  { alpha2: "TW", numeric: "+158", name: "Taiwan, Province of China" },
  { alpha2: "TJ", numeric: "+762", name: "Tajikistan" },
  { alpha2: "TZ", numeric: "+834", name: "Tanzania, United Republic of" },
  { alpha2: "TH", numeric: "+764", name: "Thailand" },
  { alpha2: "TL", numeric: "+626", name: "Timor-Leste" },
  { alpha2: "TG", numeric: "+768", name: "Togo" },
  { alpha2: "TK", numeric: "+772", name: "Tokelau" },
  { alpha2: "TO", numeric: "+776", name: "Tonga" },
  { alpha2: "TT", numeric: "+780", name: "Trinidad and Tobago" },
  { alpha2: "TN", numeric: "+788", name: "Tunisia" },
  { alpha2: "TR", numeric: "+792", name: "Turkey" },
  { alpha2: "TM", numeric: "+795", name: "Turkmenistan" },
  { alpha2: "TC", numeric: "+796", name: "Turks and Caicos Islands" },
  { alpha2: "TV", numeric: "+798", name: "Tuvalu" },
  { alpha2: "UG", numeric: "+800", name: "Uganda" },
  { alpha2: "UA", numeric: "+804", name: "Ukraine" },
  { alpha2: "AE", numeric: "+784", name: "United Arab Emirates" },
  {
    alpha2: "GB",
    numeric: "+826",
    name: "United Kingdom of Great Britain and Northern Ireland",
  },
  {
    alpha2: "UM",
    numeric: "+581",
    name: "United States Minor Outlying Islands",
  },
  { alpha2: "US", numeric: "+840", name: "United States of America" },
  { alpha2: "UY", numeric: "+858", name: "Uruguay" },
  { alpha2: "UZ", numeric: "+860", name: "Uzbekistan" },
  { alpha2: "VU", numeric: "+548", name: "Vanuatu" },
  { alpha2: "VE", numeric: "+862", name: "Venezuela (Bolivarian Republic of)" },
  { alpha2: "VN", numeric: "+704", name: "Viet Nam" },
  { alpha2: "VG", numeric: "+092", name: "Virgin Islands (British)" },
  { alpha2: "VI", numeric: "+850", name: "Virgin Islands (U.S.)" },
  { alpha2: "WF", numeric: "+876", name: "Wallis and Futuna" },
  { alpha2: "EH", numeric: "+732", name: "Western Sahara" },
  { alpha2: "YE", numeric: "+887", name: "Yemen" },
  { alpha2: "ZM", numeric: "+894", name: "Zambia" },
  { alpha2: "ZW", numeric: "+716", name: "Zimbabwe" },
];
