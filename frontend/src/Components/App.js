import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";
export default function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };
  const deleteContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveList) setContacts(retriveList);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <ContactList {...props} contacts={contacts} />}
          />
          <Route
            path="/add"
            exact
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route path="/contact/:id" exact component={ContactDetail} />
          <Route
            path="/delete/:id"
            exact
            render={(props) => (
              <DeleteContact {...props} getId={deleteContact} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}
// ()=><AddContact addContactHandler={addContactHandler} />}
// ()=><ContactList contacts={contacts} getId={deleteContact} />
