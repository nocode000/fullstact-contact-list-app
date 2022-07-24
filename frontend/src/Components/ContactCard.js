import React from "react";
import "./ContactCard.css";
import user from "../images/user.jpg";
import { Link } from "react-router-dom";
import DeleteContact from "./DeleteContact";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link
        to={{ pathname: `delete/${id}`, state: { contact: props.contact } }}
      >
        <i className="trash alternate outline icon"></i>
      </Link>
    </div>
  );
}
// props.clickHandler(id)
