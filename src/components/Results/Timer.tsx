import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increaseTime } from "@/redux/slices/typingSlice";

const Timer = () => {
  const dispatch = useAppDispatch();
  const time = useAppSelector((state) => state.typing.time);
  const isStart = useAppSelector((state) => state.typing.isStart);

  const gameState = isStart ? "IS RUNNING" : "GAME STOPED";

  console.log(gameState);

  useEffect(() => {
    if (!isStart) return;

    const handleTimer = setInterval(() => {
      dispatch(increaseTime());
    }, 1000);

    return () => clearInterval(handleTimer);
  }, [isStart]);

  return (
    <div className="px-3 align-items-center">
      <h2>{time}</h2>
      <span>seconds</span>
    </div>
  );
};

export default Timer;
