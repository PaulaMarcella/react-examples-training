import React, { Component } from "react";

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      img: this.props.img
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
    !this.state.clicked
      ? this.setState({
          img: this.props.imgClicked
        })
      : this.setState({
          img: this.props.img
        });
  }
  render() {
    return (
      <div>
        <img
          className="clickable-picture"
          onClick={this.changeImage}
          src={this.state.img}
          alt="sunglasses on click"
        />
      </div>
    );
  }
}
