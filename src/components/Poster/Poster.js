import React from "react";
import poster from "../../assets/Blue Modern Download App Instagram Post (2).png";
import styles from "./Poster.module.css";

const Poster = () => {
  return (
    <div className={styles.poster}>
      <img src={poster} alt="" />
    </div>
  );
};

export default Poster;
