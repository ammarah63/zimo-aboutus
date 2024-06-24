import { useDispatch, useSelector } from "react-redux";
import { setAddOpinion } from "@/redux/slices/ApplicantSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddOpinion = ({ onPrev, handleAddopinion }) => {
  const data = useSelector((state) => state.auth.Step1);
  const dispatch = useDispatch();

  const Formik = useFormik({
    initialValues: {
      Opinion: "",
    },
    validationSchema: Yup.object({
      Opinion: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values.Opinion);
      dispatch(setAddOpinion({ values }));
      onPrev();
      handleAddopinion();
    },
  });

  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={Formik.handleSubmit}>
        <div className="lg:flex justify-center items-center lg:ml-44 pb-20">
          <div className="lg:mb-20">
            <p className="text-center text-xl 3xl:text-2xl 4xl:text-4xl tracking-widest py-3">
              SUPPORTING INFORMATION
            </p>
            <p className="text-center 3xl:text-3xl 4xl:text-4xl text-xl tracking-widest py-3">
              {data.Email}
            </p>
            <p className="text-center text-xl 3xl:text-3xl 4xl:text-4xl tracking-widest py-3">
              {data.FirstName} {data.LastName}
            </p>
            <p className="uppercase text-[10px] 4xl:text-base 4xl:w-full
              text-center tracking-[0.6px] max-w-[942px] w-[80%] mx-auto leading-6">
              YOU CAN PROVIDE ADDITIONAL (SUPPORTING) information to help us
              better understand YOU AS A PERSON AND your
              qualifications/suitability for the role/program/INTERNSHIP. please
              provide us with additional details WHICH YOU BELIEVE WILL SUPPORT
              YOUR APPLICATION.
            </p>
            <textarea
              style={{ backgroundColor: "transparent" }}
              rows={11}
              placeholder="Supporting Information..."
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.Opinion}
              name="Opinion"
              className="w-11/12 lg:w-10/12 4xl:w-full ml-4 lg:ml-20 4xl:-ml-10 my-2 placeholder:text-inputgrey 3xl:text-3xl 3xl:placeholder:text-3xl text-base placeholder:text-base focus:outline-none border-1 border-inputgrey p-3 rounded-lg focus:border-1 focus:border-Date"
            />
          </div>
          <div className="lg:ml-1 lg:mt-52 flex justify-center lg:flex-col 3xl:flex-col">
            <div className="lg:space-y-4 space-x-4 flex lg:space-x-0 3xl:flex-col">
              <button
                onClick={onPrev}
                className="w-32 h-32 3xl:w-40 3xl:h-40 3xl:text-2xl  rounded-lg bg-white text-black border border-black"
              >
                CANCEL
              </button>
              <br />
              <button
                type="submit"
                //  onClick={onNext}
                className="w-32 h-32 3xl:w-40 3xl:h-40 3xl:text-2xl rounded-lg bg-black text-white"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddOpinion;
