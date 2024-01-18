import React, { useContext } from "react";
import { UserContext } from "../store/user-context";
import styles from "./Header.module.css";
import logo from "../../assets/FindAjob.png";

const Header = () => {
  const userCTX = useContext(UserContext);

  const clickHandler = () => {
    window.location.pathname = "/login";
  };

  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </li>
        {sessionStorage.getItem("uid") !== null ? (
          <button onClick={userCTX.logOut}>Logout</button>
        ) : null}
        {sessionStorage.getItem("uid") === null ? (
          <button onClick={clickHandler}>Login</button>
        ) : null}
      </ul>
    </nav>
  );
};

export default Header;
