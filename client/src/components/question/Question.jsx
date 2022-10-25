import React from "react";
import { useTelegram } from "../../hooks/useTelegram";

const backButtonFunction = (TG, setActiveQuestion, setCategory) => {
  setActiveQuestion(undefined);
  setCategory(undefined);
  TG.MainButton.hide();
  TG.BackButton.hide();
};

export const Question = ({ activeQuestion, category }) => {
  <div>
    <div>
      <h2>
        Вопрос № {activeQuestion + 1} <br />
        {category[activeQuestion].title}
      </h2>
      <div>{category[activeQuestion].answer}</div>
    </div>
  </div>;
};
