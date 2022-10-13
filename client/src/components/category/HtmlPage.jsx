import React from "react";
import "./Page.css";
import { Button } from "../button/Button";
export const HtmlPage = () => {
  return (
    <div>
      <h2>Добро пожаловать на страницу с вопросами по HTML</h2>
      <h4>Выбирай свой уровень и готовься к собеседованию</h4>
      <div className="choice_level_button">
        <Button>Начальный уровень</Button>
        <Button>Средний уровень</Button>
        <Button>Высокий уровень</Button>
      </div>
    </div>
  );
};
