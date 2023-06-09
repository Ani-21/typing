import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectTextDB } from "@/redux/selectors";
import { setWordsNum } from "@/redux/slices/typingSlice";
import { retriveWords } from "@/utils";

export const WordsNumber = () => {
  const dispatch = useAppDispatch();
  const textDB = useAppSelector(selectTextDB);

  return (
    <div className="d-flex gap-1">
      {[25, 50, 75, 100].map((item) => (
        <button
          key={item}
          className="btn btn-primary"
          onClick={() => dispatch(setWordsNum(retriveWords(textDB, item)))}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
