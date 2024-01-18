import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a href="useragreement">About</a>
        </li>
        <li>
          <a href="useragreement">User Agreement</a>
        </li>
        <li>
          <a href="privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="cookiepolicy">Cookie Policy</a>
        </li>
        <li>
          <a href="careers">Community Guidelines</a>
        </li>
        <li>
          <a href="termsofuse">Terms of Use</a>
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
