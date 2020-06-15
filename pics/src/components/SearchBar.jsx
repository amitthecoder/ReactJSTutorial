import React from "react";

class Searchbar extends React.Component {
  state = { searchText: "" };

  onInputChange = (event) => {
    event.preventDefault();
    //show added value in input textbox
    console.log(event.target.value);
  };

  onNameClick = (event) => {
    //count click
    console.log(event.target.value);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label> Search Name</label>
            <input
              type="text"
              onClick={this.onNameClick}
              value={this.state.searchText}
              onChange={(e) => this.setState({ searchText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
