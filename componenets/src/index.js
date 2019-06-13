import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Khalid"
        timeAgo="Yesterday at 4:45PM"
        content="Nice blog!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 6:25PM"
        content="Love your post!!!!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Abdul"
        timeAgo="2 days ago at 5:00AM"
        content="WOW!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
