import Header from "../Header/Header";
import JobList from "../JobList/JobList";
import Search from "../Search/Search";
import SearchContextProvider from "../store/search-context";

const ResultsPage = () => {
  return (
    <SearchContextProvider>
      <Header />
      <Search />
      <JobList />
    </SearchContextProvider>
  );
};

export default ResultsPage;
