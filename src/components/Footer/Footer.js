import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Cookie Policy</a>
        </li>
        <li>
          <a href="#">Terms of use</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Job Posting Rules</a>
        </li>
      </ul>
      <p>FindJobs, Inc © 2023 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
