import React, { createContext, useState } from "react";

export const SearchContext = createContext({
  jobTitle: "",
  location: "",
  results: [],
  jobTitleHandler: () => {},
  locationHandler: () => {},
});

const SearchContextProvider = (props) => {
  const [jobTitleState, setJobTitleState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [resultsState, setResultsState] = useState({});

  const jobTitleHandler = (e) => {
    setJobTitleState(e.target.value);
  };

  const locationHandler = (e) => {
    setLocationState(e.target.value);
  };

  return (
    <SearchContext.Provider
      value={{
        jobTitle: jobTitleState,
        location: locationState,
        results: resultsState,
        jobTitleHandler: jobTitleHandler,
        locationHandler: locationHandler,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
