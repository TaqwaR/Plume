import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <ul className="list-group search-results">
    {props.results.map(results => (
      <li key={results} className="list-group-item">
        <img alt="Skill" src={results} className="img-responsive" />
      </li>
    ))}
  </ul>
);

export default SearchResults;
