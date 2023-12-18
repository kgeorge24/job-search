import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobItem from "../JobItem/JobItem";
import styles from "./JobList.module.css";
import Filter from "../Filter/Filter";
import spinner from "../../assets/spinner-2.gif";
import JobListing from "../JobListing/JobListing";

const JobList = (props) => {
  const [resultsState, setResultsState] = useState({});
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [loadingResultsState, setLoadingResultsState] = useState(false);
  const [chipsState, setChipsState] = useState({});
  const [toggleState, setToggleState] = useState(false);
  const { slug } = useParams();
  const { page } = useParams();
  const { chips } = useParams();

  const fetchFromAPI = async (query) => {
    const response = await fetch(`/keyword-search/${query}`);
    const data = await response.json();
    console.log(data);
    if (data.jobs_results) {
      setResultsState(data.jobs_results);
      setChipsState(data.chips);
    } else {
      setResultsState({});
    }
    setLoadingResultsState(false);
  };

  useEffect(() => {
    setLoadingResultsState(true);
    const pathArray = window.location.pathname.split("/");

    let newChips = [];
    return pathArray.map((path) => {
      if (pathArray.indexOf(path) > 3) {
        newChips.push(path);
      }
    });
    let readyChips = newChips.join("/");
    localStorage.setItem("page", page);
    if (slug) {
      if (slug.length > 4) {
        let search = `${slug}/${page}/${encodeURIComponent(readyChips)}`;
        fetchFromAPI(search);
      }
    }
  }, [slug, page, chips]);

  const returnJobItems = () => {
    if (loadingResultsState === true) {
      return <img src={spinner} alt="" />;
    } else {
      if (JSON.stringify(resultsState) !== "{}") {
        return resultsState.map((result) => {
          return (
            <JobItem
              job={result}
              key={result.job_id}
              openJobDescription={props.openJobDescription}
            />
          );
        });
      } else {
        return <p>No results for this search. Please try again.</p>;
      }
    }
  };

  const seeMoreHandler = () => {
    setIsLoadingState(true);
    const pathArray = window.location.pathname.split(`/${page}/`);
    let localPage = parseInt(localStorage.getItem("page")) + 10;
    localStorage.setItem("page", localPage);
    let newPath =
      pathArray[0].replace("/results/", "") +
      `/${localStorage.getItem("page")}/` +
      encodeURIComponent(pathArray[1]);

    async function getMoreJobItems() {
      const response = await fetch(`/keyword-search/${newPath}`);
      const data = await response.json();
      setResultsState((prevState) => [...prevState, ...data.jobs_results]);
      setIsLoadingState(false);
    }

    getMoreJobItems();
  };

  const clickHandler = () => {
    toggleState === false ? setToggleState(true) : setToggleState(false);
  };

  const toggleJobList = () => {
    return !toggleState ? "" : styles.hidden;
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

  return (
    <div className={`${styles.joblist} ${toggleJobList()}`}>
      <Filter
        chips={chipsState}
        clickHandler={clickHandler}
        toggleState={toggleState}
      />
      <div className={styles["job-item-container"]}>
        <div>
          {returnJobItems()}
          {resultsState.length > 1 ? renderSeeMoreButton() : null}
        </div>
        <div>
          {resultsState.length > 1 && window.innerWidth >= 1000 ? (
            <JobListing job={props.job} firstJob={resultsState[0]} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default JobList;
