import { Fragment, useState, useContext } from "react";
import { DropdownContext } from "../store/dropdown-context";
import Header from "../Header/Header";
import JobList from "../JobList/JobList";
import Search from "../Search/Search";
import JobListing from "../JobListing/JobListing";

const ResultsPage = () => {
  const [toggleState, setToggleState] = useState(false);
  const [jobState, setJobState] = useState({});
  const drpdwnCTX = useContext(DropdownContext);

  const openJobDescription = (job) => {
    toggleState === false ? setToggleState(true) : setToggleState(false);
    if (window.innerWidth < 1000) {
      window.scrollTo(0, 0);
    }
    if (job) {
      setJobState(job);
    } else {
      return null;
    }
  };

  const renderJobListing = () => {
    if (toggleState === true && window.innerWidth < 1000) {
      return (
        <JobListing job={jobState} openJobDescription={openJobDescription} />
      );
    } else {
      return (
        <Fragment>
          <Search />
          <JobList openJobDescription={openJobDescription} job={jobState} />
        </Fragment>
      );
    }
  };

  const closeFilterDropdown = (e) => {
    let filterNodes = document.getElementsByClassName("dropdown-container");
    let filterNodesArray = Object.values(filterNodes);
    let isPresent = false;
    filterNodesArray.map((filterNode) => {
      return filterNode.contains(e.target) ? (isPresent = true) : null;
    });
    return isPresent ? null : drpdwnCTX.setIsActive();
  };

  return (
    <Fragment>
      <div onClick={(e) => closeFilterDropdown(e)}>
        <Header />
        {renderJobListing()}
      </div>
    </Fragment>
  );
};

export default ResultsPage;
