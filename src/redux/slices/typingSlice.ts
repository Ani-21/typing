import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  userInput: "",
  keyPress: 0,
  wrongChars: 0,
  time: "",
  isStart: false,
  cursor: 0,
};

const typingSlice = createSlice({
  name: "typing",
  initialState: initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setUserInput: (state, action) => {
      state.userInput = state.userInput.concat(action.payload);
    },
    setCursor: (state) => {
      state.cursor += 1;
    },
    restart: () => ({
      ...initialState,
    }),
  },
});

export const { setText, restart, setUserInput, setCursor } =
  typingSlice.actions;

export default typingSlice.reducer;
