import { useEffect, useState } from "react";
import axios from "@/api/axios";
import { useAppDispatch } from "@/redux/hooks";
import { setText, setRandomText } from "@/redux/slices/typingSlice";
import { TypingContainer } from "./TypingContainer";

import { filteredData } from "@/utils";
import { TestMode } from "../../components/TestMode";

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
    <div className="w-100">
      <TestMode />
      {isLoading ? <h4>Loading</h4> : null}
      <TypingContainer />
    </div>
  );
};

export default TestPage;
