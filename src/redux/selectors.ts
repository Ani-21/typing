import { RootState } from "./store";

export const selectText = (state: RootState) => state.typing.text;
export const selectUserInput = (state: RootState) => state.typing.userInput;
export const selectErrors = (state: RootState) => state.typing.errors;
export const selectTime = (state: RootState) => state.typing.time;
export const selectIsStart = (state: RootState) => state.typing.isStart;
export const selectTextDB = (state: RootState) => state.typing.textDB;
export const selectCursorointer = (state: RootState) =>
  state.typing.cursorPointer;
