import React from "react";
import "./Button.css";

export const Button = (props) => {
  const className = `tg-button ${props.className ? props.className : ""}`;
  return <button className={className} {...props} />;
};
