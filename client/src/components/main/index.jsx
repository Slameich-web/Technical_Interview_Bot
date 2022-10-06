import React from "react";
import { pet, prod } from "../../data";

import "./Main.css";
import ProjectTemplate from "./ProjectTemplate";
export const Main = ({ activeArticle }) => {
  const validateArticle = (activeArticle) => {
    if (activeArticle === "pet") {
      return <ProjectTemplate props={pet} />;
    }
    if (activeArticle === "prod") {
      return <ProjectTemplate props={prod} />;
    }
  };

  return <div>{validateArticle(activeArticle)}</div>;
};
