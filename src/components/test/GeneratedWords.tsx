import { useAppSelector } from "@/redux/hooks";

const GeneratedWords = () => {
  const text = useAppSelector((state) => state.typing.text);
  return <div className="text">{text}</div>;
};

export default GeneratedWords;
