import React from "react";
import "./Page.css";
import { Button } from "../button/Button";
import { react } from "../../data/react";
export const Page = ({ title }) => {
  return (
    <div>
      {react.map(({ title }) => {
        return <Button>{title}</Button>;
      })}
    </div>
  );
};
