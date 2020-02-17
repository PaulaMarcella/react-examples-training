import React, { Component } from "react";

export default class NumbersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    };
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    this.renderList(this.props.limit);
  }

  renderList(limit) {
    let numbersArray = [];
    for (let i = 1; i <= limit; i++) {
      numbersArray.push(i);
    }
    this.setState({
      numbers: numbersArray
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "2em"
        }}
      >
        {this.state.numbers.map(num => (
          <div key={num}>
            {(num % 2 === 0 && (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "10px",
                  border: "1px solid"
                }}
              >
                {num}
              </div>
            )) || (
              <div
                style={{
                  backgroundColor: "red",
                  padding: "10px",
                  border: "1px solid"
                }}
              >
                {num}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}
