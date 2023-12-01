import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a href="privacy">Privacy</a>
        </li>
        <li>
          <a href="cookiepolicy">Cookie Policy</a>
        </li>
        <li>
          <a href="termsofuse">Terms of use</a>
        </li>
        <li>
          <a href="careers">Careers</a>
        </li>
        <li>
          <a href="rules">Job Posting Rules</a>
        </li>
      </ul>
      <p>FindJobs, Inc © 2023 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
