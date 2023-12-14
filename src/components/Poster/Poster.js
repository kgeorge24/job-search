import React from "react";
import poster from "../../assets/Blue Modern Download App Instagram Post (2).png";
import vector from "../../assets/iStock-1468860067.jpg";
import styles from "./Poster.module.css";

const Poster = () => {
  return (
    <div className={styles.poster}>
      <a href="download">
        <img src={poster} alt="" />
        <img src={vector} alt="" />
      </a>
    </div>
  );
};

export default Poster;
