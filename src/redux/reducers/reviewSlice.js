import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    getReviewResult: false,
    getReviewLoading: false,
    getReviewError: false,
    addReviewResult: false,
    addReviewLoading: false,
    deleteReviewResult: false,
  },
  reducers: {
    reviewReducers: (state, action) => {
      const { type, payload } = action.payload;
      switch (type) {
        case "GET_REVIEW":
          return {
            ...state,
            getReviewResult: payload.data,
            getReviewLoading: payload.loading,
            getReviewError: payload.error,
          };
        case "ADD_REVIEW":
          return {
            ...state,
            addReviewResult: payload.data,
            addReviewLoading: payload.loading,
          };
        case "DELETE_REVIEW":
          return {
            ...state,
            deleteReviewResult: payload.data,
          };
        default:
          return state;
      }
    },
  },
});

export const { reviewReducers } = reviewSlice.actions;

export default reviewSlice.reducer;
