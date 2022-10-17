import React from "react";
import "./Page.css";
import { Button } from "../button/Button";
import { react } from "../../data/react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
export const Page = ({ title }) => {
  const { TG } = useTelegram();
  const [category, setCategory] = useState(undefined);
  TG.onEvent("mainButtonClicked", () => setCategory(undefined));
  if (category) {
    return (
      <div>
        {category.map((item, index) => {
          return (
            <>
              <div key={index}>{item.title}</div>
            </>
          );
        })}
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
