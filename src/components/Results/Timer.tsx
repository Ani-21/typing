import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increaseTime } from "@/redux/slices/typingSlice";
import {
  selectIsStart,
  selectText,
  selectTime,
  selectUserInput,
} from "@/redux/selectors";

export const Timer = () => {
  const dispatch = useAppDispatch();
  const time = useAppSelector(selectTime);
  const isStart = useAppSelector(selectIsStart);
  const userInput = useAppSelector(selectUserInput);
  const text = useAppSelector(selectText);

  const gameState = isStart && userInput.length <= text.length;

  useEffect(() => {
    if (!gameState) return;

    const handleTimer = setInterval(() => {
      dispatch(increaseTime());
    }, 1000);

    return () => clearInterval(handleTimer);
  }, [gameState]);

  return (
    <div className="px-3 align-items-center">
      <h2>{time}</h2>
      <span>seconds</span>
    </div>
  );
};
