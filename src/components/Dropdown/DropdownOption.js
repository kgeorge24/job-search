import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../reusableComponents/Input/Input";

const DropdownOption = (props) => {
  const { option, param, setSelectedChips, selectedChips } = props;
  const { chips, page } = useParams();
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    let path = window.location.pathname.split(`${page}/`);

    if (
      path[1].includes(encodeURIComponent(`${param}:${option.value}`)) &&
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
        <Input
          className="checkbox"
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
