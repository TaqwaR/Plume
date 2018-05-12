import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.skill array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="skill">Skill Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="skill"
        list="skills"
        type="text"
        className="form-control"
        placeholder="Enter a skill to begin"
        id="skill"
      />
      <datalist id="skills">
        {props.skills.map(skill => <option value={skill} key={skill} />)}
      </datalist>
      <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
