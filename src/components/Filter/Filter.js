import { Fragment, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DropdownContext } from "../store/dropdown-context";
import { JoblistContext } from "../store/joblist-context";
import styles from "./Filter.module.css";
import FilterItem from "../FilterItem/FilterItem";
import Dropdown from "../Dropdown/Dropdown";

const Filter = (props) => {
  const [selectedChips, setSelectedChips] = useState([]);
  const [toggleState, setToggleState] = useState(false);
  const { slug, chips, page } = useParams();
  const navigate = useNavigate();
  const drpdwnCTX = useContext(DropdownContext);
  const joblistCTX = useContext(JoblistContext);

  // useEffect(() => {
  //   setLoadingResultsState(true);
  //   const pathArray = window.location.pathname.split("/");

  //   let newChips = [];
  //   pathArray.forEach((path) => {
  //     if (pathArray.indexOf(path) > 3) {
  //       newChips.push(path);
  //     }
  //   });
  //   let readyChips = newChips.join("/");
  //   localStorage.setItem("page", page);
  //   if (slug) {
  //     if (slug.length > 4) {
  //       let search = `${slug}/${page}/${encodeURIComponent(readyChips)}`;
  //       fetchFromAPI(search);
  //     }
  //   }
  // }, [slug, page, chips]);

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
    return toggleState === false ? styles.hide : styles.modal;
  };

  const clickHandler = () => {
    toggleState === false ? setToggleState(true) : setToggleState(false);
  };

  const renderFilters = () => {
    if (JSON.stringify(joblistCTX.chipsState) !== "{}") {
      return joblistCTX.chipsState.map((chip) => {
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
        return (chipsString += `${encodeURIComponent(chip)},`);
      });
      path = `results/${slug}/${page}/${chipsString}`;
      window.location.pathname = path;
    } else {
      path = `results/${slug}/${page}/${chips}`;
      window.location.pathname = path;
    }
  };

  const clearFilter = () => {
    let path = `/results/${slug}/${page}/:`;
    window.location.pathname = path;
    navigate(path);
  };

  const renderDropdown = () => {
    if (window.innerWidth >= 1000) {
      if (JSON.stringify(joblistCTX.chipsState) !== "{}") {
        return joblistCTX.chipsState.map((chip) => {
          return (
            <Dropdown
              chip={chip}
              showResultsHandler={showResultsHandler}
              key={chip.type}
              isActive={
                drpdwnCTX.isActive === joblistCTX.chipsState.indexOf(chip)
              }
              isActiveIndex={drpdwnCTX.isActive}
              index={joblistCTX.chipsState.indexOf(chip)}
              selectedChips={selectedChips}
              setSelectedChips={setSelectedChips}
            />
          );
        });
      }
    } else {
      return <button onClick={clickHandler}>Filter</button>;
    }
  };

  return (
    <Fragment>
      <div className={styles.filter}>
        {window.innerWidth >= 1000 ? <h4>Filters</h4> : null}
        {renderDropdown()}
        <p>Page: {pageHandler()}</p>
        {window.innerWidth >= 1000 ? (
          <button onClick={clearFilter}>Reset</button>
        ) : null}
      </div>
      {/* This is the Popup Window for Filters */}
      <div className={renderClassname()}>
        <button onClick={clickHandler}>Cancel</button>
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
