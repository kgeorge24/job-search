import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/FindAjob.png";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
};

export default Header;
