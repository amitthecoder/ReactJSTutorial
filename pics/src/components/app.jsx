import React from "react";
import axios from "axios";
import Searchbar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchBarSubmit = async (text) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: text,
      },
      headers: {
        Authorization: "Client-ID KiPP_BSdwhQD_izF8UdYySML0xy9X2Ob-5ElRrUAfE4",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <Searchbar onSubmit={this.onSearchBarSubmit} />
        Found {this.state.images.length}
      </div>
    );
  }
}

export default App;
