import React from "react";
import "./Page.css";
import { Button } from "../button/Button";
import { react } from "../../data/react";
export const Page = ({ title }) => {
  return (
    <div>
      {react.map(({ title, description }) => {
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
