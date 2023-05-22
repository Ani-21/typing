import { generateText } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textDB: [],
  text: "",
  userInput: "",
  cursorPointer: 0,
  errors: 0,
  time: 0,
  isStart: false,
};

const typingSlice = createSlice({
  name: "typing",
  initialState: initialState,
  reducers: {
    setStart: (state, action) => {
      state.isStart = action.payload;
    },
    setErros: (state, action) => {
      state.errors = action.payload;
    },
    setText: (state, action) => {
      state.textDB = action.payload;
    },
    setRandomText: (state, action) => {
      state.text = action.payload;
    },
    setUserInput: (state, action) => {
      state.userInput = state.userInput.concat(action.payload);
    },
    setCursor: (state, action) => {
      state.cursorPointer = action.payload;
    },
    setWordsNum: (state, action) => {
      state.text = action.payload;
    },
    increaseTime: (state) => {
      state.time += 1;
    },
    decreaseTime: (state) => {
      state.time -= 1;
    },
    restart: (state) => {
      const genetedText = generateText(state.textDB);
      return {
        ...initialState,
        textDB: state.textDB,
        text: genetedText,
      };
    },
  },
});

export const {
  setText,
  setRandomText,
  setUserInput,
  setCursor,
  setErros,
  increaseTime,
  decreaseTime,
  restart,
  setStart,
  setWordsNum,
} = typingSlice.actions;

export default typingSlice.reducer;
