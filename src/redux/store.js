import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "@/redux/reducers/reviewSlice";
import janjiSlice from "@/redux/reducers/janjiSlice";

export const store = configureStore({
	reducer: {
		review: reviewSlice,
		janji: janjiSlice,
	},
});
