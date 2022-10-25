import React from "react";

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
