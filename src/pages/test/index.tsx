import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setText, setRandomText } from "@/redux/slices/typingSlice";

import axios from "@/api/axios";
import { TypingContainer } from "./TypingContainer";

import { TestMode } from "@/components/TestMode";
import { Results } from "@/components/Results";
import { Loader } from "@/components/common/Loader";

import { filteredData } from "@/utils";

export const TestPage = () => {
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
        throw new Error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-100">
      <TestMode />
      <Results />
      {isLoading ? <Loader /> : <TypingContainer />}
    </div>
  );
};

export default TestPage;
