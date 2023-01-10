import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App(props) {

  const users = [{
    "name": "John Doe",
    "dateBirth": "1970-01-01",
    "email": "john@example.com"
  },
  {
    "name": "Jane Doe",
    "dateBirth": "1975-01-01",
    "email": "jane@example.com"
  },
  {
    "name": "Bob Smith",
    "dateBirth": "1989-01-01",
    "email": "bob@example.com"
  }];

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(JSON.parse(e.target.value));
  };

  return (
    <div id="container">
      <h1>User Information</h1>

      <select id="userChoose" onChange={handleChange}>
        <option selected disabled hidden>Select a user</option>
        {users.map(element => <option value={JSON.stringify(element)} key={element.name}>{element.name}</option>)}
      </select>

      <h2>{value.name}</h2>
      <p>{value.dateBirth} <br />
        {value.email}</p>

    </div>
  );
}

export default App;
