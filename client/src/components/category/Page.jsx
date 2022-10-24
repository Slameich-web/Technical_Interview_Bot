/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Page.css";
import { Button } from "../button/Button";
import { react } from "../../data/react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
export const Page = ({ title }) => {
  const { TG } = useTelegram();
  const [category, setCategory] = useState(undefined);
  const [activeQuestion, setActiveQuestion] = useState(0);
  TG.onEvent("mainButtonClicked", () => setActiveQuestion(activeQuestion + 1));
  if (category) {
    TG.MainButton.show();
    TG.MainButton.setText(`Перейти к вопросу № ${activeQuestion + 2}`);
    if (activeQuestion === category.length) {
      TG.onEvent("mainButtonClicked", () => alert("qqqqq"));
      TG.MainButton.setText(`Перейти к списку вопросов`);
    }
    return (
      <div>
        <div>
          <h2>{category[activeQuestion].title}</h2>
          <div>{category[activeQuestion].answer}</div>
        </div>
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
