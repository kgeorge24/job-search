import { useEffect, useState } from "react";
import styles from "./Option.module.css";
import { useParams } from "react-router-dom";

const Option = (props) => {
  const option = props.option;
  const { chips, page } = useParams();
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    let path = window.location.pathname.split(`${page}/`);

    if (path[1].includes(`${props.param}:${option.value}`)) {
      props.setSelectedChips((prevState) => [
        ...prevState,
        `${props.param}:${option.value}`,
      ]);
      setToggleState(true);
    }
  }, [chips, props.param, option.value, page, props]);

  const clickHandler = () => {
    if (toggleState) {
      let index = props.selectedChips.indexOf(`${props.param}:${option.value}`);
      let newSelectedChipsArray = props.selectedChips;
      newSelectedChipsArray.splice(index, 1);
      props.setSelectedChips(newSelectedChipsArray);
      setToggleState(false);
    } else {
      props.setSelectedChips((prevState) => [
        ...prevState,
        `${props.param}:${option.value}`,
      ]);
      setToggleState(true);
    }
  };

  const renderSelectedButton = () => {
    return toggleState ? styles["selected"] : "";
  };

  return (
    <li>
      <button onClick={clickHandler} id={renderSelectedButton()}>
        {option.text}
      </button>
    </li>
  );
};

export default Option;
