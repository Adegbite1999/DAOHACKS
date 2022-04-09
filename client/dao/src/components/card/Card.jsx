import React from "react";
import Styles from "./Card.module.css";

const Card = ({ children }) => {
  return <div className={Styles.root}>{children}</div>;
};

export default Card;
