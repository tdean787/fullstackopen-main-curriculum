import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import Countries from "./components/Countries";
import Form from "./components/Form";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "hmmm...?", id: "Taylor", phone: "123-456-7890" },
  ]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/name/{name}");
  });

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
      <Countries />
    </div>
  );
};

export default App;
