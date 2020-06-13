import React from "react";

const SeasonsDisplay = (props) => {
  console.log(props);
  if (props.error && !props.lat) {
    return <div>Error :{props.error}</div>;
  }

  if (!props.error && props.lat) {
    return <div>latitude :{props.lat}</div>;
  }

  return <div>hi there!</div>;
};

SeasonsDisplay.defaultProps = {
  lat: 1,
};

export default SeasonsDisplay;
