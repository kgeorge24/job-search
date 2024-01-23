import { useEffect, useState, useContext } from "react";
import { UserContext } from "../store/user-context";
import { getDatabase, ref, remove, onValue } from "firebase/database";
import styles from "./JobListing.module.css";
import nologo from "../../assets/nologo.webp";
import downArrow from "../../assets/download.png";
import upArrow from "../../assets/upload.png";

const JobListing = (props) => {
  const [toggleState, setToggleState] = useState(false);
  const [seeMoreState, setSeeMoreState] = useState(false);
  const [seeMoreTextState, setSeeMoreTextState] = useState("See More");
  const [seeMoreImage, setSeeMoreImage] = useState(downArrow);
  const [resultsState, setResultsState] = useState({});
  const [userSavedJobs, setUserSavedJobs] = useState({});
  const [setSaveJobSwitch] = useState("");

  const userCTX = useContext(UserContext);
  let job = "";
  if (JSON.stringify(props.job) === "{}" && window.innerWidth > 1000) {
    job = props.firstJob;
  } else {
    job = props.job;
  }

  useEffect(() => {
    if (job.job_id) {
      fetchFromAPI(encodeURIComponent(job.job_id));
    }

    const db = getDatabase();
    const UsersSavedJobs = ref(
      db,
      "savedJobs/" + sessionStorage.getItem("uid")
    );
    onValue(UsersSavedJobs, (snapshot) => {
      if (snapshot.val() !== null) {
        setUserSavedJobs(snapshot.val());
      }
    });
  }, [job.job_id]);

  const fetchFromAPI = async (query) => {
    const response = await fetch(
      `https://job-search-backend.fly.dev/job-search/${query}`
    );
    const data = await response.json();
    setResultsState(data);
  };

  const renderImg = () => {
    return !job.thumbnail ? nologo : job.thumbnail;
  };

  const toggleSeeMore = () => {
    if (seeMoreState === false) {
      setSeeMoreState(true);
      setSeeMoreTextState("See Less");
      setSeeMoreImage(upArrow);
    } else {
      setSeeMoreState(false);
      setSeeMoreTextState("See More");
      setSeeMoreImage(downArrow);
    }
  };

  const renderToggleStyle = () => {
    if (window.innerWidth >= 1000) {
      return null;
    } else {
      return !seeMoreState ? styles.hide : null;
    }
  };

  const renderModal = () => {
    const returnCode = () => {
      if (resultsState.apply_options) {
        return resultsState.apply_options.map((apply) => {
          return (
            <li key={apply.link}>
              <a href={apply.link} target="_blank" rel="noreferrer">
                {apply.title}
              </a>
            </li>
          );
        });
      } else {
        console.log("No apply options", resultsState);
        return <p>This job is no longer accepting applications.</p>;
      }
    };

    return toggleState === false ? null : returnCode();
  };

  const toggleApply = () => {
    toggleState === false ? setToggleState(true) : setToggleState(false);
  };

  const renderSaveState = () => {
    let string = "Save";
    if (userSavedJobs) {
      let values = Object.values(userSavedJobs);
      values.forEach((value) => {
        if (job.job_id === value.jobId) {
          string = "Saved";
        }
      });
    }
    return string;
  };

  const saveJobHandler = () => {
    let values = Object.values(userSavedJobs);
    let saveJobChecker = true;
    const db = getDatabase();
    values.forEach((value) => {
      if (job.job_id === value.jobId) {
        saveJobChecker = false;
        let newUserSavedJobs = userSavedJobs;
        delete newUserSavedJobs[`${value.uid}`];
        setSaveJobSwitch(Math.random());
        remove(
          ref(
            db,
            "savedJobs/" + sessionStorage.getItem("uid") + "/" + value.uid
          )
        );
      }
    });

    if (saveJobChecker) {
      setSaveJobSwitch(Math.random());
      userCTX.saveJob(job, userSavedJobs);
    }
  };

  return (
    <div className={styles.joblisting}>
      <div className={styles.close}>
        <button onClick={props.openJobDescription}>Close</button>
      </div>
      <div className={styles.header}>
        <img src={renderImg()} alt="" />
        <h3>{job.title}</h3>
        <h4 className={styles.blue}>{job.company_name}</h4>
        <p>{job.location}</p>
        <p>
          {`${job.company_name} • ${job.location} `}
          <span className={styles.gray}>
            {job.detected_extensions.posted_at}
          </span>
        </p>
        <div>
          <button onClick={toggleApply}>Apply</button>
          {sessionStorage.getItem("uid") ? (
            <button onClick={saveJobHandler}>{renderSaveState()}</button>
          ) : null}
        </div>
      </div>
      <ul className={toggleState ? styles.modal : styles.hide}>
        {renderModal()}
      </ul>
      <div className={`${styles.description} ${renderToggleStyle()}`}>
        <h4>Job description</h4>
        <p>{job.description}</p>
      </div>
      <div className={styles.toggle}>
        <button onClick={toggleSeeMore}>
          {seeMoreTextState}
          <img src={seeMoreImage} alt="" />
        </button>
      </div>
    </div>
  );
};

export default JobListing;
