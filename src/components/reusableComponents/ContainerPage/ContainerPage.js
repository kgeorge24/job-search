import React, { useState, useContext, Fragment } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./ContainerPage.module.css";

const ContainerPage = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default ContainerPage;
