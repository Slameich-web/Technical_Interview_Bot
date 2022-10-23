import React from "react";
import "./Page.css";
import { Button } from "../button/Button";
import { react } from "../../data/react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { useEffect } from "react";
export const Page = ({ title }) => {
  const { TG } = useTelegram();
  const [category, setCategory] = useState(undefined);
  const [activeQuestion, setActiveQuestion] = useState(0);
  useEffect(() => {
    if (!localStorage.getItem("activeQuestion")) {
      localStorage.setItem("activeQuestion", activeQuestion);
    }
    let activeQuestionCheck = localStorage.getItem("activeQuestion");
    localStorage.setItem("activeQuestion", activeQuestion);
    setActiveQuestion(activeQuestionCheck);
  }, [activeQuestion]);
  TG.onEvent("mainButtonClicked", () => setActiveQuestion(1));
  if (category) {
    TG.MainButton.show();
    return (
      <div>
        <div>
          <h2>{category[activeQuestion].title}</h2>
          <div>{category[activeQuestion].answer}</div>
        </div>
        <>localStorage.length {localStorage.getItem("activeQuestion")}</>
      </div>
    );
  }
  return (
    <div>
      <div>{title}</div>
      {react.map(({ title, description, questions }) => {
        return (
          <div className="choice_level_button">
            <Button onClick={() => setCategory(questions)}>{title}</Button>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
