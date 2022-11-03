import React from "react";
import "./Page.css";
import { react } from "../../data/react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";

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
      <div className="title_question_wrapper">
        <ol className="title_question_block">
          {category.map((item) => {
            return (
              <li
                className="title_question"
                onClick={() => setActiveQuestion(Number(item.id))}
              >
                {item.title}
              </li>
            );
          })}
        </ol>
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

    return (
      <div>
        <div>
          <h2>
            Вопрос № {activeQuestion + 1} <br />
            {category[activeQuestion].title}
          </h2>
          <div>{category[activeQuestion].answer}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3>Эта страница вопросов по {title}</h3>
      <div>
        <dl class="list_question">
          {react.map(({ title, description, questions }) => {
            return (
              <>
                <dt onClick={() => setCategory(questions)}>{title}</dt>
                <dd>{description}</dd>
              </>
            );
          })}
        </dl>
      </div>
    </div>
  );
};
