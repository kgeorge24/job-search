import React from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
