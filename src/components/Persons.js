import axios from "axios";
import React from "react";

const Persons = ({ person, deletePerson }) => {
  return (
    <div>
      <p>
        {person.name} - {person.phone}{" "}
        <button onClick={() => deletePerson(person.id)}> Delete </button>
      </p>
    </div>
  );
};

export default Persons;
