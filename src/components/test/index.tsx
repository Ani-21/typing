import { useEffect, useState } from "react";
import axios from "@/api/axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { restart, setText, setRandomText } from "@/redux/slices/typingSlice";
import { TypingContainer } from "./TypingContainer";
import { VscDebugRestart } from "react-icons/vsc";
import { filteredData } from "@/utils";

const TestPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios("");
        const data = await response.data;
        dispatch(setText(filteredData(data)));
        dispatch(setRandomText(data[0]));
      } catch (err) {
        throw new Error("Something wen wrong");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-5">
      <button className="btn btn-primary" onClick={() => dispatch(restart())}>
        <VscDebugRestart />
      </button>
      {isLoading ? <h4>Loading</h4> : null}
      <TypingContainer />
    </div>
  );
};

export default TestPage;
