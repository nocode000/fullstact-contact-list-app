import React from "react";
import "./DeleteContact.css";

export default function DeleteContact(props) {
  const { id } = props.location.state.contact;
  return (
    <div className="ui container" id="delete">
      <div className="ui card container" id="card">
        <div className="content">
          <div className="header" id="head">
            Are You Sure?
          </div>
          <div className="but">
            <button
              className="ui button red"
              onClick={() => {
                props.getId(id);
                props.history.push("/");
              }}
            >
              Yes
            </button>
            <button
              className="ui button blue"
              onClick={() => {
                props.history.push("/");
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
