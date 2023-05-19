import { GeneratedWords } from "./GeneratedWords";
import { WordsContainer } from "./WordsContainer";
import { UserInputs } from "./UserInputs";
import Results from "../../components/Results";

export const TypingContainer = () => {
  return (
    <main className="container my-3">
      <Results />
      <div className="row">
        <WordsContainer>
          <GeneratedWords />
          <UserInputs />
        </WordsContainer>
      </div>
    </main>
  );
};
