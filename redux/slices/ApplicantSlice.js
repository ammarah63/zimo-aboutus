import { createSlice } from "@reduxjs/toolkit";

const ApplicantSlice = createSlice({
  name: "Applicant",
  initialState: {
    Start: null,
    Apply: null,
    Step1: null,
    Step2: null,
    Step3: null,
    AddOpinion: null,
  },
  reducers: {
    setStarts: (state, action) => {
      state.Start = action.payload;
    },
    setApplys: (state, action) => {
      state.Apply = action.payload;
    },
    setStep1: (state, action) => {
      state.Step1 = action.payload;
    },
    setStep2: (state, action) => {
      state.Step2 = action.payload;
    },
    setStep3: (state, action) => {
      state.Step3 = action.payload;
    },
    setAddOpinion: (state, action) => {
      state.AddOpinion = action.payload;
    },

    clearApplicant: (state) => {
      state.Start = null;
      state.Apply = null;
      state.Step1 = null;
      state.Step2 = null;
      state.Step3 = null;
      state.AddOpinion = null;
    },
  },
});

export const {
  setStarts,
  setApplys,
  setStep1,
  setStep2,
  setStep3,
  setAddOpinion,
  clearApplicant,
} = ApplicantSlice.actions;
export default ApplicantSlice.reducer;
