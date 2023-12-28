import { Fragment, useState } from "react";
import Header from "../Header/Header";
import JobList from "../JobList/JobList";
import Search from "../Search/Search";
import JobListing from "../JobListing/JobListing";
import Footer from "../Footer/Footer";

const ResultsPage = () => {
  const [toggleState, setToggleState] = useState(false);
  const [jobState, setJobState] = useState({});

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

  return (
    <Fragment>
      <Header />
      {renderJobListing()}
    </Fragment>
  );
};

export default ResultsPage;
