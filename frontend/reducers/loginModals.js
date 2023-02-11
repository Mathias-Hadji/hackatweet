import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        signUpModal: false,
        signInModal: false,
    },
};

export const loginModalsSlice = createSlice({
    name: "loginModal",

    initialState,

    reducers: {
        toggleModalSignUp: (state, action) => {
            state.value.signUpModal = !state.value.signUpModal;
            state.value.signInModal = false;
        },

        toggleModalSignIn: (state, action) => {
            state.value.signInModal = !state.value.signInModal;
            state.value.signUpModal = false;
        },
    },
});

export const { toggleModalSignUp, toggleModalSignIn } = loginModalsSlice.actions;
export default loginModalsSlice.reducer;
