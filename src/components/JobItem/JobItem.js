import styles from "./JobItem.module.css";
import bookmark from "../../assets/bookmark-white.png";

const JobItems = () => {
  return (
    <div className={styles.jobitem}>
      <div className={styles["jobitem-header"]}>
        <div>
          <h3>Junior React Engineer</h3>
          <h4 className={styles.blue}>Github Inc</h4>
          <p>San Francisco, CA • Remote</p>
        </div>
        <div>
          <img src={bookmark} alt="" />
        </div>
      </div>

      <div className={styles["jobitem-attributes"]}>
        <p>Full-time</p>
      </div>

      <div className={styles.footer}>
        <p>Salary: $65K - $92K</p>
        <p>17days ago</p>
      </div>
    </div>
  );
};

export default JobItems;
