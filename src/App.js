import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { JoblistContext } from "./components/store/joblist-context";
import LandingPage from "./components/LandingPage/LandingPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import Login from "./components/UserAccountForm/UserAccountForm";
import "./App.css";
import JobListing from "./components/JobListing/JobListing";
import { useContext, useEffect } from "react";
import { child } from "firebase/database";

function App() {
  const { jobId, slug, chips, page } = useParams();
  // console.log("Test", slug);
  const joblistCTX = useContext(JoblistContext);

  // useEffect(() => {
  //   let search = `${slug}/${page}/${chips}`;
  //   joblistCTX.getJobResults(search);
  //   // joblistCTX.getJobResults(slug, page, chips);
  //   const getMatchingJob = () => {
  //     if (JSON.stringify(joblistCTX.resultsState) !== "{}") {
  //       return joblistCTX.resultsState.forEach((result) => {
  //         if (result.job_id === decodeURIComponent(jobId)) {
  //           console.log(result);
  //         }
  //       });
  //     }
  //   };
  //   getMatchingJob();
  //   console.log(joblistCTX.resultsState);
  // }, [joblistCTX.resultsState, jobId]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        {window.innerWidth > 1000 ? (
          <Route
            exact
            path="/results/:slug/:page/:chips/:jobId/*"
            element={<ResultsPage />}
          />
        ) : null}
        <Route
          exact
          path="/results/:slug/:page/:chips"
          element={<ResultsPage />}
        />
        {/* {window.innerWidth < 1000 ? (
          <Route
            path="/results/:slug/:page/:chips/:jobId/*"
            element={<JobListing />}
          />
        ) : null} */}
        <Route path="signup" element={<Login formStatus="signUp" />} />
        <Route path="login" element={<Login formStatus="logIn" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
