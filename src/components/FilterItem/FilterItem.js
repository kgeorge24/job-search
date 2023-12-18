import Option from "../Option/Option";
import styles from "./FilterItem.module.css";

const FilterItem = (props) => {
  const renderOptions = () => {
    return props.chip.options.forEach((option) => {
      if (!option.text.includes("{")) {
        return (
          <Option
            key={option.text}
            option={option}
            param={props.chip.param}
            selectedChips={props.selectedChips}
            setSelectedChips={props.setSelectedChips}
          />
        );
      }
    });
  };

  return (
    <li className={styles["filter-item"]} key={props.chip.key}>
      <h4>{props.chip.type}</h4>
      <ul>{renderOptions()}</ul>
    </li>
  );
};

export default FilterItem;
