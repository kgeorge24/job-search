import React, { useContext } from "react";
import styles from "../Dropdown/Dropdown.module.css";
import DropdownOption from "./DropdownOption";
import { DropdownContext } from "../store/dropdown-context";

const Dropdown = (props) => {
  const { chip } = props;
  const drpdwnCTX = useContext(DropdownContext);

  const clickHandler = () => {
    props.isActiveIndex === props.index
      ? drpdwnCTX.setIsActive()
      : drpdwnCTX.setIsActive(props.index);
  };

  const renderOptions = () => {
    return chip.options.map((option) => {
      if (option.text !== "All") {
        return (
          <DropdownOption
            option={option}
            key={option.text}
            param={props.chip.param}
            selectedChips={props.selectedChips}
            setSelectedChips={props.setSelectedChips}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className="dropdown-container">
      <div className={styles.dropdown}>
        <button onClick={clickHandler}>{chip.type}</button>
        <div className={props.isActive ? styles.show : styles.hide}>
          <form>{renderOptions()}</form>
          <div>
            <button onClick={props.showResultsHandler}>Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
