import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class GetUser extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.user) return null;

    return <div>{this.props.user.name}</div>;
  }
}

const mapStatetoProp = (state, ownProps) => {
  //   console.log(state.users);
  //   console.log(ownProps.userId);
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStatetoProp, { fetchUser })(GetUser);
