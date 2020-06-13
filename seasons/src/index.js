import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    return (
      <div>
        <SeasonsDisplay error={this.state.errorMessage} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
