import React from "react";

const CommentDetails = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.src} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date"> {props.time}</span>
        </div>
        <div className="text">How artistic!</div>
        <div className="actions">
          <a href="/" alt="avatar" className="reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
