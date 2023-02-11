import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    firstName: null,
    userName: null,
    token: null,
  },
};

export const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    updateUserData: (state, action) => {
      console.log("payload", action.payload);
      state.value.firstName = action.payload.firstName;
      state.value.userName = action.payload.userName;
      state.value.token = action.payload.token;
    },
    userLogout: (state) => {
      state.value.firstName = null;
      state.value.userName = null;
      state.value.token = null;
    },
  },
});

export const { updateUserData, userLogout } = userSlice.actions;
export default userSlice.reducer;
