import Option from "../Option/Option";
import styles from "./FilterItem.module.css";

const FilterItem = (props) => {
  const renderOptions = () => {
    return props.chip.options.map((option) => {
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
      } else {
        return "";
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
