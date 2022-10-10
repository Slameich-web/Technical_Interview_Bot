import React from "react";
import "antd/dist/antd.css";
import { Button } from "../button/Button";
export const HtmlPage = () => {
  return (
    <div>
      <h2>Добро пожаловать на страницу с вопросами по HTML</h2>
      <h4>Выбирай свой уровень и готовься к собеседованию</h4>
      <Button>Cтажеров</Button>
      <Button>Junior</Button>
    </div>
  );
};
