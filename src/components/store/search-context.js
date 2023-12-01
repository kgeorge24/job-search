import React, { createContext, useState } from "react";

export const SearchContext = createContext({
  jobTitle: "",
  location: "",
  jobTitleHandler: () => {},
  locationHandler: () => {},
});

const SearchContextProvider = (props) => {
  const [jobTitleState, setJobTitleState] = useState("");
  const [locationState, setLocationState] = useState("");

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
        jobTitleHandler: jobTitleHandler,
        locationHandler: locationHandler,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
