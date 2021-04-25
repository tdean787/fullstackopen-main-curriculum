import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import Countries from "./components/Countries";
import Form from "./components/Form";
import axios from "axios";
import { getElementError } from "@testing-library/react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "hmmm...?", id: "Taylor", phone: "123-456-7890" },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  // useEffect(() => {
  //   axios.get("https://restcountries.eu/rest/v2/name/{name}");
  // });

  const [newPerson, setNewName] = useState([]);

  const addPerson = (event) => {
    event.preventDefault();

    const checkName = persons.map((person) => person.name);
    const personObj = {
      name: newPerson.name,
      id: newPerson.id,
      phone: newPerson.phone,
    };

    let personResponse;

    if (checkName.includes(newPerson.name)) {
      if (
        window.confirm(`${newPerson.name} already in phonebook. Update number?`)
      ) {
        let personMatch = persons.filter((el) => el.name === newPerson.name);
        console.log(personMatch[0].id);

        axios
          .put(`http://localhost:3001/persons/${personMatch[0].id}`, personObj)
          .then((response) => {
            // setPersons(persons.concat(response.data))
            personResponse = response.data;
            console.log(personResponse);
            axios
              .get("http://localhost:3001/persons")
              .then((res) => setPersons(res.data));
            console.log(persons);
            // setPersons(
            //   persons.filter((person) => person.name !== response.data.name)
            // );
            // setPersons(
            //   persons.filter((person) => person.phone !== response.data.phone)
            // );
          });
      }
      return;
    } else {
      axios
        .post("http://localhost:3001/persons", personObj)
        .then((response) => {
          console.log(response);
          setPersons(persons.concat(personObj));
          setNewName("");
        });
    }
  };

  const personChange = (event) => {
    setNewName({ ...newPerson, name: event.target.value });
  };

  const phoneChange = (event) => {
    setNewName({ ...newPerson, phone: event.target.value });
  };

  const deletePerson = (id) => {
    if (window.confirm(`Do you really want to delete?`)) {
      axios.delete(`http://localhost:3001/persons/${id}`).then((response) => {
        console.log(response);
        setPersons(persons.filter((person) => person.id !== id));
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <Form
        addPerson={addPerson}
        personChange={personChange}
        phoneChange={phoneChange}
      />
      {persons.map((person) => (
        <Persons person={person} deletePerson={deletePerson} />
      ))}
      <Filter persons={persons} />
      <Countries />
    </div>
  );
};

export default App;
