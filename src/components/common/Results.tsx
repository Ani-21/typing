import { useAppSelector } from "@/redux/hooks";
import { countAccuracy, countSpeed } from "@/utils";
import Timer from "./Results/Timer";

type ScoreProps = {
  totalTyped: number;
  errors?: number;
};

const Results = ({ totalTyped }: ScoreProps) => {
  const errors = useAppSelector((state) => state.typing.errors);

  const speed = countSpeed(totalTyped, 60);
  const accuracy = countAccuracy(errors, totalTyped);

  console.log(errors);

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
