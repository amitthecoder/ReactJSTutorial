import React from "react";
import Searchbar from "./SearchBar";

class App extends React.Component {
  onSearchBarSubmit = (text) => {
    console.log(text);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <Searchbar onSubmit={this.onSearchBarSubmit} />
      </div>
    );
  }
}

export default App;
