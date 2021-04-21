import React from "react";

const Persons = ({ persons }) => {
  return (
    <div>
      <h3>People</h3>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} : {person.phone}
        </p>
      ))}
    </div>
  );
};

export default Persons;
