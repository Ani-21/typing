import { GeneratedWords } from "./GeneratedWords";
import { WordsContainer } from "./WordsContainer";
import { UserInputs } from "./UserInputs";
import Results from "../common/Results";

export const TypingContainer = () => {
  return (
    <main className="container py-3">
      <div className="row">
        <WordsContainer>
          <GeneratedWords />
          <UserInputs />
        </WordsContainer>
      </div>
      <Results />
    </main>
  );
};
