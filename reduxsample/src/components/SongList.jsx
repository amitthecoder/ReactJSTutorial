import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  getSongList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className="ui rows" key={song.title}>
          <div className="column">
            <div>{song.title}</div>
          </div>
          <div className="column">
            <button>Select</button>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.getSongList()}</div>;
  }
}

const mapStatetoProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStatetoProps)(SongList);
