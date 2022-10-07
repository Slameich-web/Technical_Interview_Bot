import React from "react";
import "antd/dist/antd.css";
import { html } from "../../../data/html";
export const HtmlPage = () => {
  return (
    <div>
      <h2>Добро пожаловать на страницу с вопросами по HTML</h2>
      <h4>Тут ты можешь выбрать сложность вопросов и дополнительные темы</h4>
      {html.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};
