import { useAppSelector } from "@/redux/hooks";
import { selectText } from "@/redux/selectors";

export const GeneratedWords = () => {
  const text = useAppSelector(selectText);
  return <div className="text text-typing px-2">{text}</div>;
};
