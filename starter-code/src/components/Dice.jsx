import React, { Component } from "react";

export default class Dice extends Component {
  constructor() {
    super();
    this.state = {
      img: "/img/dice3.png"
    };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    this.setState({
      img: "/img/dice-empty.png"
    });
    setTimeout(() => {
      const randomDiceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      this.setState({
        img: `/img/dice${randomDiceNumber}.png`
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <h1>dice here</h1>
        <img
          onClick={this.rollDice}
          src={this.state.img}
          alt="dice"
          width="150px"
        />
      </div>
    );
  }
}
