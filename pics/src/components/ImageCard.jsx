import React from "react";
git 
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imagesRef = React.createRef();
  }

  componentDidMount() {
    this.imagesRef.current.addEventListener("load", () => {
      const height = this.imagesRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      this.setState({
        spans: spans,
      });
      // we can also right as  this.setState({ spans });
    });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imagesRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
