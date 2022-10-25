import React from "react";
import { useTelegram } from "../../hooks/useTelegram";

const backButtonFunction = (TG, setActiveQuestion, setCategory) => {
  setActiveQuestion(undefined);
  setCategory(undefined);
  TG.MainButton.hide();
  TG.BackButton.hide();
};

export const Question = ({
  setActiveQuestion,
  setCategory,
  activeQuestion,
  category,
}) => {
  const { TG } = useTelegram();
  TG.MainButton.show();
  TG.BackButton.show();
  TG.MainButton.setText(`Перейти к вопросу № ${activeQuestion + 2}`);
  TG.onEvent("backButtonClicked", () =>
    backButtonFunction(TG, setActiveQuestion, setCategory)
  );
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
};
