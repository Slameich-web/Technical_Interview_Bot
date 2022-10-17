import React from "react";
import "./Page.css";
import { react } from "../../data/react";
export const Page = ({ title }) => {
  return (
    <div>
      {react.map(({ title }) => {
        return <div>{title}</div>;
      })}
    </div>
  );
};
