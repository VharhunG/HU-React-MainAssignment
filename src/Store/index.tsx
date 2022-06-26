import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import courseSlice from "./course-slice";


const store = configureStore({
    reducer: { courseReducer: courseSlice.reducer, uiReducer: uiSlice.reducer}
})

export default store