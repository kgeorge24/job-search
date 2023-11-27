import styles from "./JobItem.module.css";
import nologo from "../../assets/nologo.webp";

const JobItems = (props) => {
  const { job } = props;

  const renderImg = () => {
    if (!job.thumbnail) {
      return nologo;
    } else {
      return job.thumbnail;
    }
  };

  const renderSalary = () => {
    if (!job.detected_extensions.salary) {
      return "Not disclosed.";
    } else {
      return job.detected_extensions.salary;
    }
  };

  const openJobDescription = () => {
    console.log("Opening job desc!", "Here is the job obj: ", job);
  };

  console.log(job.description)
  return (
    <button className={styles.button} onClick={openJobDescription}>
      <div className={styles.jobitem}>
        <div className={styles["jobitem-header"]}>
          <div>
            <img src={renderImg()} alt="" />
            <h3>{job.title}</h3>
            <h4 className={styles.blue}>{job.company_name}</h4>
            <p>{job.location}</p>
          </div>
        </div>

        <div className={styles["jobitem-attributes"]}>
          <p>{job.detected_extensions.schedule_type}</p>
        </div>

        <div className={styles.footer}>
          <p>Salary: {renderSalary()}</p>
          <p>{job.detected_extensions.posted_at}</p>
        </div>
      </div>
    </button>
  );
};

export default JobItems;
