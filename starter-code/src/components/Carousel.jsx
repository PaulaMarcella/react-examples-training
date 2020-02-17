import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgages: this.props.imgs,
      currentIndex: 0
    };
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
  }

  left() {
    this.state.currentIndex <= 0
      ? this.setState({
          currentIndex: this.props.imgs.length - 1
        })
      : this.setState({
          currentIndex: this.state.currentIndex - 1
        });
  }
  right() {
    this.state.currentIndex === this.props.imgs.length - 1
      ? this.setState({
          currentIndex: 0
        })
      : this.setState({
          currentIndex: this.state.currentIndex + 1
        });
  }

  render() {
    const imagesArray = this.state.imgages;
    return (
      <div className="carousel">
        <button className="arrow-btn" onClick={this.left}>
          {"< "}
        </button>
        <img src={imagesArray[this.state.currentIndex]} alt="carousel" />
        <button className="arrow-btn" onClick={this.right}>
          {" >"}
        </button>
      </div>
    );
  }
}
