export const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
  const isCorrect = actual === expected;
  return (
    <span className={`${isCorrect ? "correct" : "error"} `}>{expected}</span>
  );
};
