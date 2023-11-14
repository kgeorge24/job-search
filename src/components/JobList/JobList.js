import JobItems from "../JobItem/JobItem";
import styles from "./JobList.module.css";

const JobList = () => {
  return (
    <div className={styles.joblist}>
      <JobItems />
    </div>
  );
};

export default JobList;
