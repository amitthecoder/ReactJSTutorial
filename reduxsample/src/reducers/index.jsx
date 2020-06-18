import { combineReducers } from "redux";

const getAllSongReducer = () => {
  return [
    { title: "1", duration: "1:10" },
    { title: "2", duration: "2:10" },
    { title: "3", duration: "3:10" },
    { title: "4", duration: "4:10" },
  ];
};

const getSelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: getAllSongReducer,
  selectedSong: getSelectedSongReducer,
});
