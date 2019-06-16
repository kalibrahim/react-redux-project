import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
          // we called setState!
          this.setState({ lat: position.coords.latitude});

          //Bad practice
          //this.state.lat = position.coords.latitude
      },
      err => {
          this.setState({ errorMessage: err.message })
      }
    );
  }

  // React says we have to define render!!
  render() {
    return (
    <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
