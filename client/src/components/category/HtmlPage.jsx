import React from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";
export const HtmlPage = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const { Panel } = Collapse;
  return (
    <div>
      <h2>Добро пожаловать на страницу с вопросами по HTML</h2>
      <h4>Тут ты можешь выбрать сложность вопросов и дополнительные темы</h4>
      <Collapse>
        <Panel header="Вопрос ВопросВ опросВоп росВопрос Вопрос Вопрос" key="1">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};