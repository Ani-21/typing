import { useEffect } from "react";
import axios from "@/api/axios";
import GeneratedWords from "./GeneratedWords";
import WordsContainer from "./WordsContainer";
import { UserInputs } from "./UserInputs";
import { useStart } from "@/hooks/useStart";
import Results from "../common/Results";
import { useAppDispatch } from "@/redux/hooks";
import { restart, setText } from "@/redux/slices/typingSlice";

export type Start = "start" | "run" | "finish";

const TypingContainer = () => {
  const dispatch = useAppDispatch();

  const { keyPressed, errors, totalTyped } = useStart();

  console.log("ERRORS", errors);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("?loremType=normal&type=words&number=5");
      const data = await response.data;
      dispatch(setText(data[0]));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="container square-box">
      <div className="row">
        <WordsContainer>
          <GeneratedWords />
          <UserInputs userInput={keyPressed} className="position-absolute" />
        </WordsContainer>
        <Results totalTyped={totalTyped} errors={errors} />
      </div>
      <button className="btn btn-primary" onClick={() => dispatch(restart())}>
        Restart
      </button>
    </div>
  );
};

export default TypingContainer;
