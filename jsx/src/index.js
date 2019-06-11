// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "lightblue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
