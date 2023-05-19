import { useAppSelector } from "@/redux/hooks";
import { countAccuracy, countSpeed } from "@/utils";
import Timer from "./Timer";

const Results = () => {
  const errors = useAppSelector((state) => state.typing.errors);
  const text = useAppSelector((state) => state.typing.text);
  const userInput = useAppSelector((state) => state.typing.userInput);
  const time = useAppSelector((state) => state.typing.time);

  const speed = countSpeed(userInput.length, time);
  const accuracy = countAccuracy(errors, text.length);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Timer />
      <div className="px-3 align-items-center">
        <h2>{speed}</h2>
        <span>chars/min</span>
      </div>
      <div className="px-3 align-items-center">
        <h2>{accuracy}</h2>
        <span>% accuracy</span>
      </div>
    </div>
  );
};

export default Results;
