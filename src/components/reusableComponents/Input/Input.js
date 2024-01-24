import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={`${styles[props.className]} + ${
        styles[props.secondClassName]
      }`}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      id={props.id}
      checked={props.checked}
    />
  );
};

export default Input;
