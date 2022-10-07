import React from "react";
import "antd/dist/antd.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
export const HtmlPage = () => {
  return (
    <div>
      <h2>Добро пожаловать на страницу с вопросами по HTML</h2>
      <h4>Тут ты можешь выбрать сложность вопросов и дополнительные темы</h4>
      <Button>Для стажеров</Button>
      <Button>Для junior</Button>
    </div>
  );
};
