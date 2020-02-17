import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default class SignupPage extends Component {
  constructor() {
    super();
    this.state = {
      password: null,
      email: null,
      errors: {
        email: " ",
        password: " ",
        nationality: ""
      },
      formValid: false,
      errorCount: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.countErrors = this.countErrors.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    if (name === "email") {
      errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
    } else if (name === "password") {
      errors.password =
        value.length > 8 ? "" : "Password must be more than 8 characterd long";
    }

    this.setState({ errors: errors, [name]: value }, console.log(errors));
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form bt its not ", this.state.error);
    } else {
      console.error("Invalid Form");
    }
    this.setState({ formValid: this.validateForm(this.state.errors) });
    this.setState({ errorCount: this.countErrors(this.state.errors) });
  }

  validateForm(errors) {
    let valid;
    Object.values(errors).map(err =>
      err.length === 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
        ? (valid = true)
        : (valid = false)
    );
    return valid;
  }

  countErrors(errors) {
    let count = 0;
    Object.values(errors).forEach(val => val.length > 0 && (count = count + 1));
    return count;
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              noValidate
            />
            {errors.email.length > 0 && (
              <Form.Text className="text-muted">{errors.email}</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              noValidate
            />
            {errors.password.length > 0 && (
              <Form.Text className="text-muted">{errors.password}</Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Your Nationality</Form.Label>
            <Form.Control
              name="nationality"
              onChange={this.handleChange}
              as="select"
              noValidate
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </Form.Control>
          </Form.Group>
          {this.state.errorCount !== null ? (
            <p className="form-status">
              Form is {this.state.formValid ? "valid ✅" : "invalid ❌"}
            </p>
          ) : (
            "Form not submitted"
          )}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
