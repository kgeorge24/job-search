import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobItem from "../JobItem/JobItem";
import styles from "./JobList.module.css";
import Filter from "../Filter/Filter";
import spinner from "../../assets/spinner-2.gif";

const JobList = (props) => {
  const [resultsState, setResultsState] = useState({});
  const { slug } = useParams();
  const { page } = useParams();

  const fetchFromAPI = async (query) => {
    const response = await fetch(`/keyword-search/${query}`);
    const data = await response.json();
    setResultsState(data);
  };

  useEffect(() => {
    if (slug) {
      if (slug.length > 4) {
        let search = `${slug}/${page}`;
        fetchFromAPI(search);
      }
    }
  }, [slug, page]);

  const returnJobItems = () => {
    if (JSON.stringify(resultsState) !== "{}") {
      return resultsState.jobs_results.map((result) => {
        return (
          <JobItem
            job={result}
            key={result.job_id}
            openJobDescription={props.openJobDescription}
          />
        );
      });
    } else {
      return <img src={spinner} alt="" />;
    }
  };

  const navigation = () => {
    const pathArray = window.location.pathname.split("/");
    pathArray[3] = parseInt(pathArray[3]) + 10;
    const newPath = pathArray.join("/");
    window.location.pathname = newPath;
  };
  console.log(resultsState);
  return (
    <div className={styles.joblist}>
      <Filter jobs={resultsState} />
      {returnJobItems()}
      <button className={styles.seemore} onClick={navigation}>
        See More
      </button>
    </div>
  );
};

export default JobList;
