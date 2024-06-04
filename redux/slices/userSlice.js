import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    userDetails: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.userDetails = null;
    },
  },
});

export const { setUser, setUserDetails, clearUser } = userSlice.actions;
export default userSlice.reducer;
