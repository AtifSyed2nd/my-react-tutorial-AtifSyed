import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./featere/todo/todoSlice";


export const store = configureStore({
  reducer: todoReducer,
});

export default store