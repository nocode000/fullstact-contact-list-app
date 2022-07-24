import React from "react";
import user from "../images/usercard.jpg";

export default function ContactDetail(props) {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </div>
    </div>
  );
}
