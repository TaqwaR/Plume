import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next user to be displayed
  componentDidMount() {
    this.loadNextUser();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the user likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the user likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the user, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next user image
    this.setState(newState);
    this.loadNextUser();
  };

  loadNextUser = () => {
    API.getUsers()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Learn New Skills!</h1>
        <h3 className="text-center">
          Thumbs up on any skills that interest you!
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          Matched {this.state.matchCount} skills so far!
        </h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That User would like to exchange skills with you!!!
        </Alert>
      </div>
    );
  }
}

export default Discover;
