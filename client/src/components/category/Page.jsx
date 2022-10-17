import React from "react";
import "./Page.css";
import { Button } from "../button/Button";
import { react } from "../../data/react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
export const Page = ({ title }) => {
  const { TG } = useTelegram();
  const [category, setCategory] = useState(undefined);
  if (category) {
    console.log(category);
    return (
      <div>
        {category.map(({ title, answer, id }) => {
          return (
            <>
              <div key={id}>{title}</div> {answer}
            </>
          );
        })}
        {TG.MainButton.show()}
      </div>
    );
  }
  return (
    <div>
      <div>{title}</div>
      {react.map(({ title, description, questions }) => {
        return (
          <div className="choice_level_button">
            <Button onClick={() => setCategory(questions)}>{title}</Button>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
