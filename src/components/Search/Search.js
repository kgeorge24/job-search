import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../store/search-context";
import styles from "./Search.module.css";
import Input from "../reusableComponents/Input/Input";

const Search = () => {
  const searchCtx = useContext(SearchContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hi");
    if (searchCtx.jobTitle) {
      window.location.href = `/results/${searchCtx.jobTitle}${searchCtx.location}/0/:`;
    }
  };

  return (
    <form className={styles.search} onSubmit={(e) => submitHandler(e)}>
      <div>
        <Input
          className="input"
          secondClassName="search-input"
          type="search"
          placeholder="Search job title or keyword"
          value={searchCtx.jobTitle}
          onChange={(e) => searchCtx.jobTitleHandler(e)}
          name="job-title"
        />
      </div>
      <div>
        <Input
          className="input"
          secondClassName="location-input"
          type="search"
          placeholder="City, state or postal code"
          value={searchCtx.location}
          onChange={(e) => searchCtx.locationHandler(e)}
          name="location"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
        <Link to={`/results/${searchCtx.jobTitle}${searchCtx.location}/0/:`}>
          Search Jobs
        </Link>
      </div>
    </form>
  );
};

export default Search;
