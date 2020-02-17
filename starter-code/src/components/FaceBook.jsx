import React, { Component } from "react";
import data from "./../data/berlin.json";

const buttonCountries = [...new Set(data.map(profile => profile.country))];

export default class FaceBook extends Component {
  constructor() {
    super();
    this.state = {
      profiles: data,
      filterBy: "",
      pictureToggle: true
    };
    this.activeCountry = this.activeCountry.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getbackground = this.getbackground.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByLastname = this.sortByLastname.bind(this);
    this.sortByCountry = this.sortByCountry.bind(this);
  }

  activeCountry(country) {
    this.state.filterBy === country
      ? this.setState({ filterBy: "" })
      : this.setState({
          filterBy: country
        });
  }

  getbackground(country) {
    let style;
    this.state.filterBy === country
      ? (style = { backgroundColor: "rgb(230, 238, 255)" })
      : (style = { backgroundColor: "white" });
    return style;
  }

  toggle(name) {
    console.log(name);
    this.setState({
      pictureToggle: !this.state.pictureToggle
    });
  }

  sortByName() {
    const sortedArray = this.state.profiles.sort((a, b) =>
      a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0
    );
    this.setState({
      profiles: sortedArray
    });
  }

  sortByLastname() {
    const sortedArray = this.state.profiles.sort((a, b) =>
      a.lastName < b.lastName ? -1 : a.lastName > b.lastName ? 1 : 0
    );
    this.setState({
      profiles: sortedArray
    });
  }

  sortByCountry() {
    const sortedArray = this.state.profiles.sort((a, b) =>
      a.country < b.country ? -1 : a.country > b.country ? 1 : 0
    );
    this.setState({
      profiles: sortedArray
    });
  }

  render() {
    const profiles = this.state.profiles;
    return (
      <div>
        <div>
          {buttonCountries.map((country, index) => (
            <button
              style={this.getbackground(country)}
              onClick={() => this.activeCountry(country)}
              key={index}
            >
              {country}
            </button>
          ))}
        </div>
        <form>
          <input type="search" />
        </form>
        <button className="facebook-btn" onClick={this.sortByName}>
          Sort by Name
        </button>
        <button className="facebook-btn" onClick={this.sortByLastname}>
          Sort by Last Name
        </button>
        <button className="facebook-btn" onClick={this.sortByCountry}>
          Sort by Country
        </button>

        <div style={{ height: "500px", overflow: "scroll" }}>
          {profiles.map(profile => (
            <div
              style={this.getbackground(profile.country)}
              className="id-card container"
              key={profile.lastName}
            >
              <img
                //onClick={() => this.toggle(profile.firstName)}
                className="id-img"
                src={profile.img}
                alt={profile.firstName}
              />{" "}
              {this.state.pictureToggle && (
                <div>
                  <p>First name: {profile.firstName}</p>
                  <p>Last name: {profile.lastName}</p>
                  <p>Country: {profile.country}</p>
                  {(profile.isStudent && <p>Type: Student</p>) || (
                    <p>Type: Teacher</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
