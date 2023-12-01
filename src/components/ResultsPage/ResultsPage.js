import { Fragment, useState } from "react";
import Header from "../Header/Header";
import JobList from "../JobList/JobList";
import Search from "../Search/Search";
import JobListing from "../JobListing/JobListing";

const ResultsPage = () => {
  const [toggleState, setToggleState] = useState(false);
  const [jobState, setJobState] = useState({});

  const openJobDescription = (job) => {
    toggleState === false ? setToggleState(true) : setToggleState(false);
    window.scrollTo(0, 0);
    if (job) {
      setJobState(job);
    } else {
      return null;
    }
  };

  const renderJobListing = () => {
    if (toggleState === true) {
      return (
        <JobListing job={jobState} openJobDescription={openJobDescription} />
      );
    } else {
      return (
        <Fragment>
          <Search />
          <JobList openJobDescription={openJobDescription} />
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      <Header />
      {renderJobListing()}
    </Fragment>
  );
};

export default ResultsPage;
