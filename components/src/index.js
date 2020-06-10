import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <ApprovalCard>
        <CommentDetails author="Sam-1" time="1 AM" src={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails author="Sam-2" time="2 AM" src={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails author="Sam-3" time="3 AM" src={faker.image.avatar()} />
      </ApprovalCard>

      <form className="ui reply form">
        <div className="field">
          <textarea></textarea>
        </div>
        <div className="ui blue labeled submit icon button">
          <i className="icon edit"></i> Add Reply
        </div>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
