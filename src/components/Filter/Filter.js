import { Fragment, useState } from "react";
import styles from "./Filter.module.css";

const Filter = (props) => {
  const [toggleState, setToggleState] = useState(false);

  const clickHandler = () => {
    toggleState === false ? setToggleState(true) : setToggleState(false);
    console.log("ive been clicked");
  };

  const pageHandler = () => {
    const page = window.location.pathname.split("/");

    if (parseInt(page[3]) === 0) {
      return 1;
    } else if (page[3].length === 2) {
      return parseInt(page[3].split("")[0]) + 1;
    } else {
      return parseInt(page[3]) / 10 + 1;
    }
  };

  const renderClassname = () => {
    return toggleState === false ? styles.hide : styles.modal;
  };

  return (
    <Fragment>
      <div className={styles.filter}>
        <button onClick={clickHandler}>Filter</button>
        <p>Page: {pageHandler()}</p>
      </div>
      <div className={renderClassname()}>
        <button onClick={clickHandler}>X</button>
      </div>
    </Fragment>
  );
};

export default Filter;
