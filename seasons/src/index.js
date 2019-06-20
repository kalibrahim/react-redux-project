import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  state = { lat: null, errorMessage: "" };

  componentDidUpdate() {
    console.log("My component was just updated - it re-rendered!");
  }

  // React says we have to define render!!
  render() {
      return (
          <div className="border red">
              {this.renderContent()}
          </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
