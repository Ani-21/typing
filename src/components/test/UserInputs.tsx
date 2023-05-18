import { Character } from "../common/Character";
import { useAppSelector } from "@/redux/hooks";

type UserInputsProps = {
  userInput: string;
  className?: string;
};

export const UserInputs = ({ userInput }: UserInputsProps) => {
  const text = useAppSelector((state) => state.typing.text);
  const typedCharacters = userInput?.split("");

  return (
    <div className="position-absolute top-0 start-0">
      {typedCharacters.map((char, index) => (
        <Character
          key={`${char}_${index}`}
          actual={char}
          expected={text.split("")[index]}
        />
      ))}
    </div>
  );
};
