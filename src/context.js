import React, { Component } from "react";
import axios from "axios";

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
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => this.setState({ contacts: response.data }));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
