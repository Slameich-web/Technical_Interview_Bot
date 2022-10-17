import React from "react";
import "./Page.css";
import { Button } from "../button/Button";

export const Page = ({ title }) => {
  const data = React.lazy(() => import(`../../data/${title}`));
  return (
    <div>
      <div>{title}</div>
      {data.map(({ title, description }) => {
        return (
          <div className="choice_level_button">
            <Button>{title}</Button>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
