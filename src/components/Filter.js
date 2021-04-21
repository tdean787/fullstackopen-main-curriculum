import React, { useState } from "react";
//when filter input changes call function and set the state of filtered persons
//to any names which contain string in input

const Filter = (props) => {
  const [filteredPersons, setFilteredPersons] = useState([
    { name: "", id: "", phone: "" },
  ]);

  const filterPersons = (event) => {
    if (event.target.value.length === 0) {
      setFilteredPersons({});
    } else {
      const personsMatch = props.persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredPersons(personsMatch);
      console.log(event.target.value.length);
    }
  };

  return (
    <div>
      <h3>Phonebook</h3>
      Filter names with : <input onChange={filterPersons} />
      {filteredPersons.length > 0 && (
        <div>
          {filteredPersons.map((person) => (
            <p key={person.name}>
              {person.name} : {person.phone}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
