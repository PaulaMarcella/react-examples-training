import React, { Component } from "react";

export default class CreditCard extends Component {
  lastDigits(number) {
    return "•••• •••• ••••" + number.slice(12, 16);
  }

  formatExpDate(month, year) {
    return `Expires ${month}/${year.toString().slice(2, 4)} `;
  }

  render() {
    const cardStyle = {
      backgroundColor: `${this.props.bgColor}`,
      color: `${this.props.color}`
    };
    return (
      <div className="credit-card" style={cardStyle}>
        <h4>{this.props.type}</h4>
        <h2>{this.lastDigits(this.props.number)}</h2>
        <p>
          <span className="date-space-right">
            {this.formatExpDate(
              this.props.expirationMonth,
              this.props.expirationYear
            )}
          </span>
          <span>{this.props.bank}</span>
        </p>
        <p>{this.props.owner}</p>
      </div>
    );
  }
}
