import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
import mathReducer from "../Slices/mathSlice";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    mathInfo: mathReducer,
  },
});

export default store;
