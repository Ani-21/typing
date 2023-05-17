import { configureStore } from "@reduxjs/toolkit";
import typingSlice from "./slices/typingSlice";

const store = configureStore({
  reducer: {
    typing: typingSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
