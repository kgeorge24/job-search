import React, { createContext, useState } from "react";

export const JoblistContext = createContext({
  resultsState: {},
  setResultsState: () => {},
  chipsState: {},
  loadingResultsState: "",
  getJobResults: () => {},
  setLoadingResultsState: () => {},
  switchState: "",
  setSwitchState: () => {},
  setChipsState: () => {},
});

const JoblistContextProvider = (props) => {
  const [resultsState, setResultsState] = useState({});
  const [loadingResultsState, setLoadingResultsState] = useState(false);
  const [chipsState, setChipsState] = useState({});
  const [switchState, setSwitchState] = useState(false);

  const fetchFromAPITest = async (slug, page, encodedChips) => {
    // debugger
    if (page > 0) {
      let jobArray = [];
      let jobChips = [];
      for (let i = 0; i <= page; i += 10) {
        let query = `${slug}/${i}/${encodedChips}`;

        const response = await fetch(
          `https://job-search-backend.fly.dev/keyword-search/${query}`
        );

        const data = await response.json();
        jobArray.push(...data.jobs_results);
        setChipsState(data.chips);
        jobChips.push(...data.chips);
      }

      setResultsState(jobArray);
    } else {
      let query = `${slug}/${page}/${encodedChips}`;

      const response = await fetch(
        `https://job-search-backend.fly.dev/keyword-search/${query}`
      );
      const data = await response.json();

      setResultsState(data.jobs_results);
      setChipsState(data.chips);
    }
  };

  // const fetchFromAPI = async (query) => {
  //   const response = await fetch(
  //     `https://job-search-backend.fly.dev/keyword-search/${query}`
  //   );
  //   const data = await response.json();
  //   let noResults = "Google hasn't returned any results for this query.";
  //   if (data.error) {
  //     setResultsState({ error: noResults });
  //   } else {
  //     if (data.jobs_results) {
  //       console.log("results", data.jobs_results);
  //       setResultsState(data.jobs_results);
  //       setChipsState(data.chips);
  //     } else {
  //       setResultsState({});
  //     }
  //     if (data.error) {
  //     }
  //     setLoadingResultsState(false);
  //   }
  // };

  return (
    <JoblistContext.Provider
      value={{
        resultsState: resultsState,
        setResultsState: setResultsState,
        chipsState: chipsState,
        loadingResultsState: loadingResultsState,
        getJobResults: fetchFromAPITest,
        setLoadingResultsState: setLoadingResultsState,
        switchState: switchState,
        setSwitchState: setSwitchState,
        setChipsState: setChipsState,
      }}
    >
      {props.children}
    </JoblistContext.Provider>
  );
};

export default JoblistContextProvider;
