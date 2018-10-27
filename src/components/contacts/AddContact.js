import React, { Component } from "react";

import uuid from "uuid";

import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = (dispatch, event) => {
    event.preventDefault();

    const { name, email, phone } = this.state;

    // Validate form: Check for errors
    let errors = {};
    if (name === "") {
      errors = { ...errors, name: "Name is required" };
    }

    if (email === "") {
      errors = { ...errors, email: "Email is required" };
    }

    if (phone === "") {
      errors = { ...errors, phone: "Phone is required" };
    }

    // If there are keys then there are errors. Set state and quit
    if (Boolean(Object.keys(errors).length)) {
      this.setState({ errors: errors });
      return;
    }

    const newContact = {
      // if key and value are the same you can use this shortcut
      name,
      email,
      phone,
      id: uuid()
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear form
    this.setState({ name: "", email: "", phone: "", errors: {} });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
