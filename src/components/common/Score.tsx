type ScoreProps = {
  title: string;
  value: string;
};

const Score = ({ title, value }: ScoreProps) => {
  return (
    <>
      <p>{title}</p>
      <div>{value}</div>
    </>
  );
};

export default Score;
