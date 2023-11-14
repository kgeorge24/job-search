import { useContext } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { SearchContext } from "./components/store/search-context";
import "./App.css";
import ResultsPage from "./components/ResultsPage/ResultsPage";

function App() {
  const searchCtx = useContext(SearchContext);
  console.log(searchCtx.results);
  const returnPages = () => {
    if (searchCtx.results.length > 0) {
      return <ResultsPage />;
    } else {
      return <LandingPage />;
    }
  };
  return <div>{returnPages()}</div>;
}

export default App;
