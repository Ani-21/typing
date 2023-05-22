import { useAppSelector } from "@/redux/hooks";
import {
  selectErrors,
  selectText,
  selectTime,
  selectUserInput,
} from "@/redux/selectors";
import { countAccuracy, countSpeed } from "@/utils";
import { Timer } from "./Timer";

export const Results = () => {
  const errors = useAppSelector(selectErrors);
  const text = useAppSelector(selectText);
  const userInput = useAppSelector(selectUserInput);
  const time = useAppSelector(selectTime);

  const speed = countSpeed(userInput.length, time);
  const accuracy = countAccuracy(errors, text.length);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Timer />
      <div className="px-3 align-items-center">
        <h2>{speed}</h2>
        <span>chars/sec</span>
      </div>
      <div className="px-3 align-items-center">
        <h2>{accuracy}</h2>
        <span>% accuracy</span>
      </div>
    </div>
  );
};
