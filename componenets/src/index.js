import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Khalid"/>
      <CommentDetail author="Alex"/>
      <CommentDetail author="Abdul"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
