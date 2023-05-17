import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUserInput } from "@/redux/slices/typingSlice";
import { useState, useEffect, useRef } from "react";

export const useKeyPress = (enabled: boolean) => {
  const dispatch = useAppDispatch();
  const keyPressed = useAppSelector((state) => state.typing.userInput);
  const [cursor, setCursor] = useState(0);
  const totalTyped = useRef(0);

  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (!enabled) return;

      if (keyPressed !== key && key.length === 1) {
        dispatch(setUserInput(key));
        setCursor((prev) => prev + 1);
        totalTyped.current += 1;
      }
    };

    window.addEventListener("keyup", downHandler);
    return () => {
      window.removeEventListener("keyup", downHandler);
    };
  }, [keyPressed, dispatch, enabled, cursor]);

  return { keyPressed, cursor, totalTyped: totalTyped.current };
};
