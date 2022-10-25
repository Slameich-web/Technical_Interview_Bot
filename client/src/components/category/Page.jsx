/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Page.css";
import { Button } from "../button/Button";
import { react } from "../../data/react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { Question } from "../question/Question";

export const Page = ({ title }) => {
  const { TG } = useTelegram();
  const [category, setCategory] = useState(undefined);
  const [activeQuestion, setActiveQuestion] = useState(undefined);
  TG.onEvent("mainButtonClicked", () => setActiveQuestion(activeQuestion + 1));
  const backButtonFunction = () => {
    setActiveQuestion(undefined);
    setCategory(undefined);
    TG.MainButton.hide();
    TG.BackButton.hide();
  };
  if (category && activeQuestion === undefined) {
    TG.MainButton.hide();
    TG.BackButton.show();
    return (
      <div>
        {category.map((item) => {
          return (
            <div onClick={() => setActiveQuestion(Number(item.id))}>
              {item.title}
            </div>
          );
        })}
      </div>
    );
  }
  if (category) {
    TG.MainButton.show();
    TG.BackButton.show();
    TG.MainButton.setText(`Перейти к вопросу № ${activeQuestion + 2}`);
    TG.onEvent("backButtonClicked", () => backButtonFunction());

    if (activeQuestion === category.length - 1) {
      TG.onEvent("mainButtonClicked", () => setActiveQuestion(undefined));
      TG.MainButton.show();
      TG.MainButton.setText(`Перейти к списку вопросов`);
    }

    return <Question activeQuestion={activeQuestion} category={category} />;
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
