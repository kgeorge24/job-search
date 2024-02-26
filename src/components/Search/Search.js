import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SearchContext } from "../store/search-context";
import styles from "./Search.module.css";
import Input from "../reusableComponents/Input/Input";

const Search = () => {
  const searchCtx = useContext(SearchContext);
  const { slug, page, chips, jobId } = useParams();
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hi");
    if (searchCtx.jobTitle) {
      let route = `/results/${searchCtx.jobTitle}${searchCtx.location}/0/${
        chips ? chips : ":"
      }`;
      window.location.pathname = route;
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
        <button type="submit">Search Jobs</button>
      </div>
    </form>
  );
};

export default Search;
