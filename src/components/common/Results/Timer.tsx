import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increaseTime } from "@/redux/slices/typingSlice";

const Timer = () => {
  const time = useAppSelector((state) => state.typing.time);
  const isStart = useAppSelector((state) => state.typing.isStart);
  const isStartCondition = isStart;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isStartCondition) return;
    const handleTimer = setInterval(() => {
      dispatch(increaseTime());
    }, 1000);

    return () => clearInterval(handleTimer);
  }, [isStartCondition]);

  return (
    <div className="px-3 align-items-center">
      <h2>{time}</h2>
      <span>seconds</span>
    </div>
  );
};

export default Timer;
