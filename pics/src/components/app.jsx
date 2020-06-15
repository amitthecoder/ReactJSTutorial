import React from "react";
import Unsplash from "../api/unsplash";
import Searchbar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchBarSubmit = async (text) => {
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: text,
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <Searchbar onSubmit={this.onSearchBarSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
