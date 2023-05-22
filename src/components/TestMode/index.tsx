import { useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { BsTextCenter } from "react-icons/bs";
import { restart } from "@/redux/slices/typingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { WordsNumber } from "./WordsNumber";

export const TestMode = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="d-flex flex-row gap-2">
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsOpened(false);
          dispatch(restart());
        }}
      >
        <VscDebugRestart />
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <BsTextCenter />
      </button>
      {isOpened ? <WordsNumber /> : null}
    </div>
  );
};
