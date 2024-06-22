import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import { useSelector, useDispatch } from "react-redux";
import { setStep2 } from "@/redux/slices/ApplicantSlice";

const Step2 = ({ onNext }) => {
  const data = useSelector((state) => state.auth.Step1);
  const data2 = useSelector((state) => state.auth.Step2);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      nationalId: (data2 && data2.NationalId) || "",
      address1: (data2 && data2.Address1) || "",
      address2: (data2 && data2.Address2) || "",
      city: (data2 && data2.City) || "",
      state: (data2 && data2.State) || "",
      zipCode: (data2 && data2.ZipCode) || "",
    },
    validationSchema: Yup.object({
      // email: Yup.string().email("Invalid email address").required("Required"),
      //fullName: Yup.string().required("Required"),
      nationalId: Yup.string().required("Required"),
      address1: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      zipCode: Yup.string().required("Required"),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      onNext();
      dispatch(
        setStep2({
          Email: data.Email,
          FullName: data.FullName + data.LastName,
          NationalId: values.nationalId,
          Address1: values.address1,
          Address2: values.address2,
          City: values.city,
          State: values.state,
          ZipCode: values.zipCode,
        })
      );
      console.log("Form values", values);
    },
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="lg:flex justify-center text-center ml-3 lg:ml-44 pb-20">
          <div className="lg:mb-20 ">
            <p className="text-center  3xl:text-3xl 4xl:text-4xl text-xl tracking-widest py-3">
              {data.Email}
            </p>

            {formik.touched.email && formik.errors.email ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.email}
              </p>
            ) : null}

            <p className="text-center text-xl 3xl:text-3xl 4xl:text-4xl tracking-widest py-3">
              {data.FirstName} {data.LastName}
            </p>

            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.fullName}
              </p>
            ) : null}

            <Input
              placeholder="NATIONAL ID NUMBER CNIC"
              name="nationalId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nationalId}
            />
            {formik.touched.nationalId && formik.errors.nationalId ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.nationalId}
              </p>
            ) : null}

            <Input
              placeholder="ADDRESS 1"
              name="address1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address1}
            />
            {formik.touched.address1 && formik.errors.address1 ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.address1}
              </p>
            ) : null}

            <Input
              placeholder="ADDRESS 2 (APARTMENT, SUITE, ETC.)"
              name="address2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address2}
            />
            {formik.touched.address2 && formik.errors.address2 ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.address2}
              </p>
            ) : null}

            <Input
              placeholder="CITY"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.city}
              </p>
            ) : null}

            <Input
              placeholder="STATE / REGION"
              name="state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
            {formik.touched.state && formik.errors.state ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.state}
              </p>
            ) : null}

            <Input
              placeholder="ZIP CODE / POST CODE"
              name="zipCode"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
            />
            {formik.touched.zipCode && formik.errors.zipCode ? (
              <p className="text-[red] text-sm uppercase text-center p-0 -my-2 mb-1">
                {formik.errors.zipCode}
              </p>
            ) : null}
          </div>

          <div className="lg:flex -ms-10 lg:justify-end lg:items-end">
            <button
              type="submit"
              className="w-32 h-32 ml-10 xl:ml-20 3xl:ml-32 3xl:w-40 3xl:h-40 3xl:text-2xl mb-20 mt-1 rounded-lg bg-black text-white"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Step2;
