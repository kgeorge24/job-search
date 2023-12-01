import React from "react";
import poster from "../../assets/Blue Modern Download App Instagram Post (2).png";
import styles from "./Poster.module.css";

const Poster = () => {
  return (
    <div className={styles.poster}>
      <a href="download">
        <img src={poster} alt="" />
      </a>
    </div>
  );
};

export default Poster;
