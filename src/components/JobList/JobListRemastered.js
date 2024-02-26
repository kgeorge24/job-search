import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobItem from "../JobItem/JobItem";
import { JoblistContext } from "../store/joblist-context";
import styles from "./JobLIstRemastered.module.css";
import spinner from "../../assets/spinner-2.gif";

const JobListRemastered = (props) => {
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const { slug, page, chips } = useParams();
  const joblistCTX = useContext(JoblistContext);
  const navigate = useNavigate();

  const openJobDescription = (job) => {
    toggleState === false ? setToggleState(true) : setToggleState(false);
    if (window.innerWidth < 1000) {
      window.scrollTo(0, 0);
    }
  };

  const returnJobItems = () => {
    if (joblistCTX.loadingResultsState === true) {
      return <img src={spinner} alt="" />;
    } else {
      if (JSON.stringify(joblistCTX.resultsState) !== "{}") {
        return joblistCTX.resultsState.map((result) => {
          return (
            <JobItem
              job={result}
              key={result.job_id}
              openJobDescription={openJobDescription}
            />
          );
        });
      } else {
        return <p>No results for this search. Please try again.</p>;
      }
    }
  };

  const renderSeeMoreButton = () => {
    return isLoadingState ? (
      <div className={styles.loading}>
        <img src={spinner} alt="" />
      </div>
    ) : (
      <button className={styles.seemore} onClick={seeMoreHandler}>
        See More
      </button>
    );
  };

  const seeMoreHandler = () => {
    setIsLoadingState(true);
    // const pathArray = window.location.pathname.split(`/${page}/`);
    // let localPage = parseInt(localStorage.getItem("page")) + 10;
    // localStorage.setItem("page", localPage);
    // let newPath =
    //   pathArray[0].replace("/results/", "") +
    //   `/${localStorage.getItem("page")}/` +
    //   encodeURIComponent(pathArray[1]);

    let newPageNumber = parseInt(page) + 10;

    let tweakedPath = `../results/${slug}/${newPageNumber}/${chips}`;
    let searchPath = `${slug}/${newPageNumber}/${chips}`;
    navigate(tweakedPath, { replace: true });
    async function getMoreJobItems() {
      const response = await fetch(
        `https://job-search-backend.fly.dev/keyword-search/${searchPath}`
      );
      const data = await response.json();
      joblistCTX.setResultsState((prevState) => [
        ...prevState,
        ...data.jobs_results,
      ]);
      setIsLoadingState(false);
    }
    getMoreJobItems();
  };

  console.log(joblistCTX.resultsState);
  return (
    <div className={styles.joblist}>
      {returnJobItems()}
      {joblistCTX.resultsState.length > 1 ? renderSeeMoreButton() : null}
    </div>
  );
};

export default JobListRemastered;
