import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DropdownOption = (props) => {
  const { option, param, setSelectedChips, selectedChips } = props;
  const { chips, page } = useParams();
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    let path = window.location.pathname.split(`${page}/`);

    if (
      path[1].includes(`${param}:${option.value}`) &&
      !selectedChips.includes(`${param}:${option.value}`)
    ) {
      setSelectedChips((prevState) => [
        ...prevState,
        `${param}:${option.value}`,
      ]);
      setToggleState(true);
    }
  }, [chips, param, option.value, page, setSelectedChips, selectedChips]);

  const clickHandler = (e) => {

    if (!e.target.checked) {
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

  return (
    <Fragment>
      <div>
        <input
          type="checkbox"
          id={option.text}
          name={option.value}
          onChange={(e) => clickHandler(e)}
          checked={toggleState}
        />
        <label htmlFor={option.text}>{option.text}</label>
      </div>
    </Fragment>
  );
};

export default DropdownOption;
