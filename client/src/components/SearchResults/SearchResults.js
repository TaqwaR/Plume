import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <ul className="list-group search-results">
    {props.results.map(result => (
      <li key={result} className="list-group-item">
        <img alt="lolz" src={result} className="img-responsive" />
      </li>
    ))}
  </ul>
);

export default SearchResults;
