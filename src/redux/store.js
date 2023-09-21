import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice"

export const store = configureStore({
    reducer: {
      userData: userReducer
    },
    devTools: true,
});
