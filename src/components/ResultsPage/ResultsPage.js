import { Fragment } from "react";
import Header from "../Header/Header";
import JobList from "../JobList/JobList";
import Search from "../Search/Search";
import SearchContextProvider from "../store/search-context";

const ResultsPage = () => {
  return (
    <Fragment>
      <Header />
      <Search />
      <JobList />
    </Fragment>
  );
};

export default ResultsPage;
