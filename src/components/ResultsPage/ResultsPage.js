import { Fragment, useContext, useEffect } from "react";
import { JoblistContext } from "../store/joblist-context";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import JobListing from "../JobListing/JobListing";
import JobListRemastered from "../JobList/JobListRemastered";
import { useNavigate, useParams } from "react-router-dom";

const ResultsPage = () => {
  const joblistCTX = useContext(JoblistContext);
  const { slug, page, chips, jobId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let newChips = [];
    let readyChips = "";
    const pathArray = window.location.pathname.split("/");
    // Adds any chips to the U
    pathArray.forEach((path) => {
      if (pathArray.indexOf(path) > 3 && pathArray.indexOf(path) < 5) {
        newChips.push(path);
      }
    });

    readyChips = newChips.join("/");
    let results = joblistCTX.resultsState;

    // This runs if we get back results from our API search.
    if (JSON.stringify(results !== "{}") && results[0]) {
      let { job_id } = joblistCTX.resultsState[0];

      if (!jobId && window.innerWidth > 1000) {
        let route = `/results/${slug}/${page}/${
          chips !== ":" ? encodeURIComponent(chips) : chips
        }/${encodeURIComponent(job_id)}`;
        navigate(route);
      } else if (jobId && window.innerWidth > 1000) {
        let route = `/results/${slug}/${page}/${
          chips !== ":" ? encodeURIComponent(chips) : chips
        }/${encodeURIComponent(jobId)}`;
        navigate(route);
      }
      // This runs if we have no results back from the API search
    } else {
      joblistCTX.getJobResults(slug, page, encodeURIComponent(readyChips));
    }
  }, [slug, page, chips, joblistCTX.resultsState, jobId, joblistCTX, navigate]);

  const displayPageWhenResultsAreReceived = () => {
    if (JSON.stringify(joblistCTX.resultsState) !== "{}") {
      if (jobId) {
        let job = "";
        joblistCTX.resultsState.forEach((result) => {
          console.log("we are checking if job ID's match");
          if (result.job_id === decodeURIComponent(jobId)) {
            job = result;
          }
        });
        return (
          <Fragment>
            <JobListRemastered />
            {window.innerWidth > 1000 ? <JobListing job={job} /> : null}
          </Fragment>
        );
      } else {
        return <JobListRemastered />;
      }
    }
  };

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Header />
        <Search />
        <Filter />
        <div
          style={{
            display: "flex",
            width: "80%",
            height: "60vh",
          }}
        >
          {JSON.stringify(joblistCTX.resultsState !== "{}")
            ? displayPageWhenResultsAreReceived()
            : null}
        </div>
      </div>
    </Fragment>
  );
};

export default ResultsPage;
