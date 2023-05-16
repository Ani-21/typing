import { useEffect, useState } from "react";
import axios from "@/api/axios";
import Score from "../common/Score";

const TypingContainer = () => {
  const [text, setText] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("?loremType=normal&type=words&number=100");
      const data = await response.data;
      setText(data);
    };
    fetchData();
  }, []);

  return (
    <div className="position-relative container square-box">
      <div className="row">
        <div className="col">
          <p>{text}</p>
        </div>
        <div className="col-3">
          <Score title="Скорость" value="12" />
          <Score title="Точность" value="99" />
        </div>
      </div>
    </div>
  );
};

export default TypingContainer;
