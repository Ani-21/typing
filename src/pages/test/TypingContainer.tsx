import { GeneratedWords } from "./GeneratedWords";
import { WordsContainer } from "./WordsContainer";
import { UserInputs } from "./UserInputs";

export const TypingContainer = () => {
  return (
    <main className="container my-3">
      <div className="row overflow-auto square-box">
        <WordsContainer>
          <GeneratedWords />
          <UserInputs />
        </WordsContainer>
      </div>
    </main>
  );
};
