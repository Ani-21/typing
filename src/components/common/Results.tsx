import { countAccuracy } from "@/utils";
import { countSpeed } from "@/utils";

type ScoreProps = {
  totalTyped: number;
  errors: number;
};

const Results = ({ totalTyped, errors }: ScoreProps) => {
  const speed = countSpeed(totalTyped, 60);
  const accuracy = countAccuracy(errors, totalTyped);
  return (
    <div className="col-3">
      <div>
        Скорость
        <p>{speed}</p>
      </div>
      <div>
        Точность
        <p>{accuracy}%</p>
      </div>
    </div>
  );
};

export default Results;
