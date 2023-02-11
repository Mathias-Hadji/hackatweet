import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        publications: []
    },
};

export const publicationsSlice = createSlice({
    name: "publications",

    initialState,

    reducers: {
        getAllPublications: (state, action) => {
            state.value.articles = action.payload
        },
        addArticle : (state, action) => {
            state.value.articles = [action.payload, ...state.value.articles]
        }
    },
});

export const { getAllPublications } = publicationsSlice.actions;
export default publicationsSlice.reducer;
