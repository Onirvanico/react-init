import { configureStore } from "@reduxjs/toolkit";
import textInputSlice from "./textSlice";

export default configureStore({
    reducer: {
        textInput: textInputSlice
    },
});