import React, { useContext } from "react";
import styles from "../Dropdown/Dropdown.module.css";
import DropdownOption from "./DropdownOption";
import { DropdownContext } from "../store/dropdown-context";
import downArrow from "../../assets/icons8-sort-down-30.png";

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
      return option.text !== "All" ? (
        <DropdownOption
          option={option}
          key={option.text}
          param={props.chip.param}
          selectedChips={props.selectedChips}
          setSelectedChips={props.setSelectedChips}
        />
      ) : null;
    });
  };

  return (
    <div className="dropdown-container">
      <div className={styles.dropdown}>
        <button onClick={clickHandler}>
          {chip.type}
          <img src={downArrow} alt="" />
        </button>
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
