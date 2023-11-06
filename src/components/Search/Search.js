import React from "react";
import search from "../../assets/search-interface-symbol.png";
import location from "../../assets/location.png";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.search}>
      <div>
        <div>
          <img src={search} alt="" />
        </div>
        <input type="text" placeholder="Search job title or keyword"></input>
      </div>
      <div>
        <div>
          <img src={location} alt="" />
        </div>
        <input type="text" placeholder="City, state or postal code" />
      </div>
      <div>
        <button>Search Jobs</button>
      </div>
    </form>
  );
};

export default Search;
