import React, { Component } from "react";

export default class IdCard extends Component {
  render() {
    return (
      <div className="id-card container">
        <img src={this.props.picture} alt={this.props.firstName} />
        <div>
          <p>First name: {this.props.firstName}</p>
          <p>Last name: {this.props.lastName}</p>
          <p>Gender: {this.props.gender}</p>
          <p>Birth: {this.props.birth.toString().slice(0, 16)}</p>
        </div>
      </div>
    );
  }
}
