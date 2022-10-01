import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../stores/counter";
import citeReducer from "../stores/cite";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  reducer: {
    cite: citeReducer,
  },
});
