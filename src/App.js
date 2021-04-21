import React, { useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Taylor", id: "Taylor", phone: "123-456-7890" },
    { name: "Ada Lovelace", phone: "39-44-5323523" },
    { name: "Dan Abramov", phone: "12-43-234345" },
    { name: "Mary Poppendieck", phone: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState([]);

  const addPerson = (event) => {
    event.preventDefault();

    const checkName = persons.map((person) => person.name);
    const personObj = {
      name: newName.name,
      id: newName.name,
      phone: newName.phone,
    };

    if (checkName.includes(newName)) {
      alert(`${newName} is already in the phonebook`);
      return;
    } else {
      setPersons(persons.concat(personObj));
      setNewName("");
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    }
  };

  const personChange = (event) => {
    setNewName({ ...newName, name: event.target.value });
  };

  const phoneChange = (event) => {
    setNewName({ ...newName, phone: event.target.value });
  };

  return (
    <div>
      <Form
        addPerson={addPerson}
        personChange={personChange}
        phoneChange={phoneChange}
      />
      <Persons persons={persons} />
      <Filter persons={persons} />
    </div>
  );
};

export default App;
