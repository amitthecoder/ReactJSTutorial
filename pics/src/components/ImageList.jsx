import React from "react";

const ImageList = (props) => {
  const listOfImages = props.images.map((image) => {
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
    );
  });

  return <div>{listOfImages}</div>;
};

export default ImageList;
