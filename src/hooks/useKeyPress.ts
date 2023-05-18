import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUserInput, setCursor } from "@/redux/slices/typingSlice";
import { useEffect } from "react";

export const useKeyPress = () => {
  const dispatch = useAppDispatch();
  const keyPressed = useAppSelector((state) => state.typing.userInput);
  const cursorPointer = useAppSelector((state) => state.typing.cursorPointer);

  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (keyPressed !== key && key.length === 1) {
        dispatch(setUserInput(key));
        dispatch(setCursor(cursorPointer + 1));
      }
    };

    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [keyPressed, dispatch, cursorPointer]);

  return { keyPressed, cursorPointer };
};
