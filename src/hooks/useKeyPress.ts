import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCursorointer, selectUserInput } from "@/redux/selectors";
import { setUserInput, setCursor } from "@/redux/slices/typingSlice";
import { useEffect } from "react";

export const useKeyPress = () => {
  const dispatch = useAppDispatch();
  const keyPressed = useAppSelector(selectUserInput);
  const cursorPointer = useAppSelector(selectCursorointer);

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
