import { useEffect } from "react";
import GeneratedWords from "./GeneratedWords";
import WordsContainer from "./WordsContainer";
import { UserInputs } from "./UserInputs";
import Results from "../common/Results";
import { useKeyPress } from "@/hooks/useKeyPress";
import { useAppSelector } from "@/redux/hooks";
import { setErros } from "@/redux/slices/typingSlice";

const TypingContainer = () => {
  const text = useAppSelector((state) => state.typing.text);
  const userInput = useAppSelector((state) => state.typing.userInput);
  const { keyPressed, cursorPointer } = useKeyPress();

  const areWordsFinished = cursorPointer === text.length;

  useEffect(() => {
    if (areWordsFinished) {
      const errors = userInput.split("").filter((char, i) => char !== text[i]);
      setErros(errors.length);
    }
  }, [areWordsFinished]);

  return (
    <main className="container py-3">
      <div className="row">
        <WordsContainer>
          <GeneratedWords />
          <UserInputs userInput={keyPressed} className="position-absolute" />
        </WordsContainer>
      </div>
      <Results totalTyped={cursorPointer} />
    </main>
  );
};

export default TypingContainer;
