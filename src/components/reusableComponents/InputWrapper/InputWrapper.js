import React from "react";
import styles from "./InputWrapper.module.css";

const InputWrapper = (props) => {
  return <div className={styles["input-wrapper"]}>{props.children}</div>;
};

export default InputWrapper;
