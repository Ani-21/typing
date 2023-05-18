import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  userInput: "",
  keyPress: 0,
  cursorPointer: 0,
  errors: 0,
  time: 0,
};

const typingSlice = createSlice({
  name: "typing",
  initialState: initialState,
  reducers: {
    setErros: (state, action) => {
      state.errors = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setUserInput: (state, action) => {
      state.userInput = state.userInput.concat(action.payload);
    },
    setCursor: (state, action) => {
      state.cursorPointer = action.payload;
    },
    increaseTime: (state) => {
      state.time += 1;
    },
    restart: () => ({
      ...initialState,
    }),
  },
});

export const {
  setText,
  setUserInput,
  setCursor,
  setErros,
  increaseTime,
  restart,
} = typingSlice.actions;

export default typingSlice.reducer;
