import React from "react";

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="position-relative col px-0">{children}</div>;
};

export default WordsContainer;
