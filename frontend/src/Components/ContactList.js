import ContactCard from "./ContactCard";
import React from "react";
import { Link } from "react-router-dom";

export default function ContactList(props) {
  // const deleteContactHandler = (id) => {
  //   props.getId(id);
  // };
  // const contacts = [
  //   {
  //     id: 1,
  //     name: "janu",
  //     email: "janu@gmail.com",
  //   },
  // clickHandler={deleteContactHandler}
  // ];
  const renderList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="add">
          <button className="ui button blue right">AddContact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderList}</div>
    </div>
  );
}
