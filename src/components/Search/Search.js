import React, { useContext } from "react";
import { SearchContext } from "../store/search-context";
import search from "../../assets/search-interface-symbol.png";
import location from "../../assets/location.png";
import styles from "./Search.module.css";

const Search = () => {
  const searchCtx = useContext(SearchContext);
  
  return (
    <form
      className={styles.search}
      onSubmit={(e) => searchCtx.submitSearchForm(e)}
    >
      <div>
        <div>
          <img src={search} alt="" />
        </div>
        <input
          type="search"
          placeholder="Search job title or keyword"
          value={searchCtx.jobTitle}
          onChange={(e) => searchCtx.jobTitleHandler(e)}
        ></input>
      </div>
      <div>
        <div>
          <img src={location} alt="" />
        </div>
        <input
          type="search"
          placeholder="City, state or postal code"
          value={searchCtx.location}
          onChange={(e) => searchCtx.locationHandler(e)}
        />
      </div>
      <div>
        <button>Search Jobs</button>
      </div>
    </form>
  );
};

export default Search;
