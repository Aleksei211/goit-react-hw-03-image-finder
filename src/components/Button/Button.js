import React from "react";
import s from "../Button/Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button onClick={() => onClick()} className={s.Button} type="button">
      Load More
    </button>
  );
};

export default Button;