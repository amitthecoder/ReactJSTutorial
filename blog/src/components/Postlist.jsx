import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import { fetchPost } from "../actions";
import User from "./GetUser";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderList = () => {
    return this.props.posts.map((post) => {
      return (
        <Card style={{ width: "18rem" }} key={post.id}>
          <Card.Header>
            <User userId={post.userId} />
          </Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProp = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProp, { fetchPost })(PostList);
