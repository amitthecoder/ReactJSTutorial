export const selectedSongAction = (song) => {
  return {
    type: "SELECTED_SONG",
    payload: song,
  };
};
