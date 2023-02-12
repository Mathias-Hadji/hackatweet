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
            state.value.publications = action.payload;
        },

        addNewPublication : (state, action) => {
            state.value.publications = [action.payload, ...state.value.publications];
        },

        deletePublication: (state, action) => {
            state.value.publications = state.value.publications.filter(publication => publication._id !== action.payload.publicationId);
        }
    },
});

export const { getAllPublications, addNewPublication,  deletePublication} = publicationsSlice.actions;
export default publicationsSlice.reducer;
