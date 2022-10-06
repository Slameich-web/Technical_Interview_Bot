import React from "react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { Button } from "../button/Button";
import { Main } from "../main";
import "./Header.css";
export const Header = () => {
  const { user } = useTelegram();
  const [activeArticle, setActiveArticle] = useState("pet");
  return (
    <div className="header">
      <span className="username">
        Привет <strong>{user?.username}</strong>
      </span>
      <h1>Список моих работ</h1>
      <div className="button_container">
        <div className="button_wrapper">
          <Button onClick={() => setActiveArticle("pet")}>Pet-проекты</Button>
        </div>
        <div className="button_wrapper">
          <Button onClick={() => setActiveArticle("prod")}>Prod-проекты</Button>
        </div>
      </div>

      <Main activeArticle={activeArticle} />
    </div>
  );
};
