import React from "react";
import "./Page.css";
import { Button } from "../button/Button";
export const Page = ({ title }) => {
  return (
    <div>
      <h2>Добро пожаловать на страницу с вопросами по {title}</h2>
      <br />
      <h3>Выбирай свой уровень и готовься к собеседованию</h3>
      <div className="choice_level_button">
        <Button>Начальный уровень</Button>
        <Button>Средний уровень</Button>
        <Button>Высокий уровень</Button>
      </div>
      <div className="choice_level_wrapper">
        <h3 className="choice_level_title">
          Вопросы распределены следующим образом:
        </h3>
        <div className="choice_level_text">
          <strong>Начальный уровень</strong> содержит большую часть вопросов
          которые действительно могут встретиться вам на собеседование.
        </div>
        <div className="choice_level_text">
          <strong>Средний уровень:</strong> предполагает что вы знаете все
          основы и прошли начальный список вопросов, ну или очень уверены в
          себе, вопросы которые будут в это разделе вам могут встретиться на
          собеседовании, но на высокие позиции, мидл и больше.
        </div>
        <div className="choice_level_text">
          <strong>Высокий уровень:</strong> предполагает что вы просто хотите
          узнать что-то новое, данные вопросы скорее вы не увидите на
          собеседование, но сможете удивить собеседника своими знаниями
        </div>
      </div>
    </div>
  );
};
