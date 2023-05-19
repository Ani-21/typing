import { useAppSelector } from "@/redux/hooks";
import { memo } from "react";

export const GeneratedWords = memo(() => {
  const text = useAppSelector((state) => state.typing.text);
  return <div className="text text-typing px-2">{text}</div>;
});
