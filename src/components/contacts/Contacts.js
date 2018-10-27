import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    // Consumer provides the value from context and then value is passed in to arrow
    // function (lambda function) to be used
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            // Fragments take out the extra div that would have been here instead.
            <Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
