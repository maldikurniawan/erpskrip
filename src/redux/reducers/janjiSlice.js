import { createSlice } from "@reduxjs/toolkit";

export const janjiSlice = createSlice({
  name: "janji",
  initialState: {
    getJanjiResult: false,
    getJanjiLoading: false,
    getJanjiError: false,
    addJanjiResult: false,
    addJanjiLoading: false,
    deleteJanjiResult: false,
  },
  reducers: {
    janjiReducers: (state, action) => {
      const { type, payload } = action.payload;
      switch (type) {
        case "GET_JANJI":
          return {
            ...state,
            getJanjiResult: payload.data,
            getJanjiLoading: payload.loading,
            getJanjiError: payload.error,
          };
        case "ADD_JANJI":
          return {
            ...state,
            addJanjiResult: payload.data,
            addJanjiLoading: payload.loading,
          };
        case "DELETE_JANJI":
          return {
            ...state,
            deleteJanjiResult: payload.data,
          };
        default:
          return state;
      }
    },
  },
});

export const { janjiReducers } = janjiSlice.actions;

export default janjiSlice.reducer;
