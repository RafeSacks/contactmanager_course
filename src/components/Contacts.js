import React, { Component, Fragment } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      // Fragments take out the extra div that would have been here instead.
      <Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </Fragment>
    );
  }
}

export default Contacts;
