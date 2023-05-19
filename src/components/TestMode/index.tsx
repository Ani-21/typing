import { useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { CiTimer } from "react-icons/ci";
import { BsTextCenter } from "react-icons/bs";
import { restart } from "@/redux/slices/typingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { WordsNumber } from "./WordsNumber";
import { TimeRange } from "./TimeRange";

export const TestMode = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isTimerOpened, setIsTimerOpened] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="d-flex flex-row gap-2">
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsOpened(false);
          setIsTimerOpened(false);
          dispatch(restart());
        }}
      >
        <VscDebugRestart />
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsOpened(false);
          setIsTimerOpened((prev) => !prev);
        }}
      >
        <CiTimer />
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsOpened((prev) => !prev);
          setIsTimerOpened(false);
        }}
      >
        <BsTextCenter />
      </button>
      {isOpened ? <WordsNumber /> : null}
      {isTimerOpened ? <TimeRange /> : null}
    </div>
  );
};
