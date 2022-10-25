import React from "react";

export const Question = (props) => {
  <div>
    <div>
      <h2>
        Вопрос № {props.activeQuestion + 1} <br />
        {props.category[props.activeQuestion].title}
      </h2>
      <div>{props.category[props.activeQuestion].answer}</div>
    </div>
  </div>;
};
