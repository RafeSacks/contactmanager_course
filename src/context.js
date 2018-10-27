import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  let updated_state;

  switch (action.type) {
    case "DELETE_CONTACT":
      updated_state = {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
      break;

    case "ADD_CONTACT":
      updated_state = {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
      break;

    default:
      updated_state = state;
      break;
  }

  return updated_state;
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmail.com",
        phone: "555-555-4444"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "555-555-4567"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
