import { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DropdownContext } from "../store/dropdown-context";
import styles from "./Filter.module.css";
import FilterItem from "../FilterItem/FilterItem";
import Dropdown from "../Dropdown/Dropdown";

const Filter = (props) => {
  const [selectedChips, setSelectedChips] = useState([]);
  const { chips, page } = useParams();

  const drpdwnCTX = useContext(DropdownContext);

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

  // Handles showing or hiding the filter screen for mobile view.
  const renderClassname = () => {
    return props.toggleState === false ? styles.hide : styles.modal;
  };

  const renderFilters = () => {
    if (JSON.stringify(props.chips) !== "{}") {
      return props.chips.map((chip) => {
        return (
          <FilterItem
            chip={chip}
            key={chip.type}
            selectedChips={selectedChips}
            setSelectedChips={setSelectedChips}
          />
        );
      });
    }
  };

  const showResultsHandler = () => {
    let path = window.location.pathname.split(chips);
    let chipsString = "";

    if (selectedChips.length > 0) {
      selectedChips.map((chip) => {
        return (chipsString += `${chip},`);
      });
      path[1] = chipsString;
      path = path[0] + path[1];
      window.location.pathname = path;
    } else {
      path[1] = ":";
      path = path[0] + path[1];
      window.location.pathname = path;
    }
  };

  const clearFilter = () => {
    let pathArray = window.location.pathname.split(`/${page}/`);
    let newPath = "";
    pathArray.pop();
    newPath = `${pathArray[0]}/${page}/:`;
    window.location.pathname = newPath;
  };

  const renderDropdown = () => {
    if (window.innerWidth >= 1000) {
      if (JSON.stringify(props.chips) !== "{}") {
        return props.chips.map((chip) => {
          return (
            <Dropdown
              chip={chip}
              showResultsHandler={showResultsHandler}
              key={chip.type}
              isActive={drpdwnCTX.isActive === props.chips.indexOf(chip)}
              isActiveIndex={drpdwnCTX.isActive}
              index={props.chips.indexOf(chip)}
              selectedChips={selectedChips}
              setSelectedChips={setSelectedChips}
            />
          );
        });
      }
    } else {
      return <button onClick={props.clickHandler}>Filter</button>;
    }
  };

  return (
    <Fragment>
      <div className={styles.filter}>
        {renderDropdown()}
        <p>Page: {pageHandler()}</p>
        {window.innerWidth >= 1000 ? (
          <button onClick={clearFilter}>Reset</button>
        ) : null}
      </div>
      {/* This is the Popup Window for Filters */}
      <div className={renderClassname()}>
        <button onClick={props.clickHandler}>Cancel</button>
        <ul>{window.innerWidth < 1000 ? renderFilters() : null}</ul>
        <div>
          <button onClick={showResultsHandler}>Show Results</button>
          <button onClick={clearFilter}>Clear Filters</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
