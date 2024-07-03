import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "@/redux/reducers/reviewSlice";

export const store = configureStore({
	reducer: {
		review: reviewSlice,
	},
});
