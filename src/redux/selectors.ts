import { RootState } from "./store";

export const textSelector = (state: RootState) => state.typing.text;
