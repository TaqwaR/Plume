import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";




class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      skills: [],
      results: [],
    };

  this.componentDidMount = this.componentDidMount.bind(this);
  }


  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getSkillList()
      .then(res => this.setState({ skills: res.data.map(person => person.skill )}))
        // console.log(this.state.results),
        // console.log(res.data)
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getSkill(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.map(person => person.skill ));
        }
        this.setState({ results: res.data.map(person => person.skill ), error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search By Skill!</h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          skills={this.state.skills}
        />
        <SearchResults results={this.state.results} />
      </Container>
    );
  }
}

export default Search;
