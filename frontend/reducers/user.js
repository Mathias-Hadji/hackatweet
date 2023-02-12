import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        userId: "user ID",
        firstName: "First Name",
        userName: "Username",
        token: null,
    },
};

export const userSlice = createSlice({
    name: "user",

    initialState,

    reducers: {
        updateUserData: (state, action) => {
            state.value.userId = action.payload.userId;
            state.value.firstName = action.payload.firstName;
            state.value.userName = action.payload.userName;
            state.value.token = action.payload.token;
        },
        userLogout: (state, action) => {
            state.value.userId = null;
            state.value.firstName = null;
            state.value.userName = null;
            state.value.token = null;
        },
    },
});

export const { updateUserData, userLogout } = userSlice.actions;
export default userSlice.reducer;
