import { Character } from "../../components/common/Character";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { useKeyPress } from "@/hooks/useKeyPress";
import {
  setCursor,
  setErros,
  setStart,
  setUserInput,
} from "@/redux/slices/typingSlice";

export const UserInputs = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.typing.text);
  const userInput = useAppSelector((state) => state.typing.userInput);
  const { cursorPointer } = useKeyPress();

  const isStarted = cursorPointer > 0;
  const areWordsFinished = cursorPointer === text.length;

  useEffect(() => {
    if (isStarted) {
      dispatch(setStart(true));
    }
  }, [isStarted]);

  useEffect(() => {
    if (areWordsFinished) {
      const errors = userInput.split("").filter((char, i) => char !== text[i]);
      dispatch(setErros(errors.length));
      // create handler: handleStop
      dispatch(setUserInput(""));
      dispatch(setCursor(0));
      dispatch(setStart(false));
    }
  }, [areWordsFinished]);

  const typedCharacters = userInput?.split("");

  return (
    <div className="position-absolute top-0 start-0 text-typing px-2">
      {typedCharacters.map((char, index) => (
        <Character
          key={`${char}_${index}`}
          actual={char}
          expected={text.split("")[index]}
        />
      ))}
    </div>
  );
};
