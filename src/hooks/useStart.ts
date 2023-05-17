import { useState, useEffect, useCallback } from "react";
import { useKeyPress } from "./useKeyPress";
import { countErrors } from "@/utils";
import { useAppSelector } from "@/redux/hooks";

export type State = "start" | "run" | "finish";

export const useStart = () => {
  const text = useAppSelector((state) => state.typing.text);
  console.log(text.length);
  const [state, setState] = useState<State>("start");
  const [errors, setErrors] = useState(0);
  const { keyPressed, cursor, totalTyped } = useKeyPress(state !== "finish");

  const isStarting = state === "start" && cursor > 0;
  const areWordsFinished = cursor === text.length;

  const handleCountErrors = useCallback(() => {
    const wordsReached = text.substring(0, Math.min(cursor, text.length));
    setErrors((prev) => (prev += countErrors(keyPressed, wordsReached)));
  }, [keyPressed, cursor, text]);

  useEffect(() => {
    if (isStarting) {
      setState("run");
    }
  }, [isStarting]);

  useEffect(() => {
    if (areWordsFinished) {
      setState("finish");
      handleCountErrors();
      console.log("finished");
    }
  }, [handleCountErrors, state, areWordsFinished]);

  return { keyPressed, cursor, totalTyped, errors };
};
