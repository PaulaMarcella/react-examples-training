import React, { Component } from "react";

export default class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    };
    this.hanldeClick = this.hanldeClick.bind(this);
  }
  hanldeClick() {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render() {
    return (
      <div>
        <button className="like-button" onClick={this.hanldeClick}>
          {this.state.likes} Likes ♥
        </button>
      </div>
    );
  }
}
