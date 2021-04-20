import React, { useState } from "react";
import Course from "./components/Course";
import Note from "./components/Note";

// const Part = (props) => {
//   return (
//     <div>
//       <p>
//         {props.body} = {props.exercises}
//       </p>
//     </div>
//   );
// };

const Header = ({ name }) => {
  return (
    <div>
      <h1> {name}</h1>
    </div>
  );
};

// const Content = (props) => {
//   return (
//     <div>
//       <ul class="list">
//         {props.parts.forEach((element) => {
//           <Part body={element.name} exercises={element.exercise} />;
//         })}
//         <Part body={props.parts[0].name} exercises={props.parts[0].exercises} />
//         <Part body={props.parts[1].name} exercises={props.parts[1].exercises} />
//         <Part body={props.parts[2].name} exercises={props.parts[2].exercises} />
//       </ul>
//     </div>
//   );
// };

// const Total = (props) => {
//   const sum = props.course
//     .map((element) => element.exercises)
//     .reduce((a, b) => a + b);
//   return (
//     <div>
//       <p>
//         Number of exercises:
//         {sum}
//       </p>
//     </div>
//   );
// };

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const [persons, setPersons] = useState([
    { name: "Taylor", id: "Taylor", phone: "123-456-7890" },
    { name: "Ada Lovelace", phone: "39-44-5323523" },
    { name: "Dan Abramov", phone: "12-43-234345" },
    { name: "Mary Poppendieck", phone: "39-23-6423122" },
  ]);

  //initialize state of filteredPersons as array of objects
  const [filteredPersons, setFilteredPersons] = useState([
    { name: "", id: "", phone: "" },
  ]);
  const [newName, setNewName] = useState([]);
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

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

  //when filter input changes call function and set the state of filtered persons
  //to any names which contain string in input
  const filterPersons = (event) => {
    console.log(event.target.value);
    const fPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPersons(fPersons);
    console.log(fPersons);
  };
  return (
    <div>
      <div>
        {/* <h1>Courses</h1>
        <ul>
          {courses.map((element) => {
            return (
              <Course
                key={element.id}
                name={element.name}
                parts={element.parts}
              />
            );
          })}

        </ul> */}

        {/* <ul>
          {notes.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </ul> */}

        <h2> Notes </h2>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? "important" : "all"}
          </button>
        </div>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}

        <form onSubmit={addNote}>
          <input onChange={handleNoteChange} value={newNote} />
          <button type="submit">Save Note</button>
        </form>
      </div>
      <div>
        <h2>Phonebook</h2>
        <div>
          filter shown with: <input onChange={filterPersons} />
        </div>
        {/* render a list of p tags with the filtered person object array. list name and number*/}
        {filteredPersons.map((person) => (
          <p>
            {person.name} : {person.phone}
          </p>
        ))}

        <form onSubmit={addPerson}>
          <div>
            name: <input onChange={personChange} />
          </div>
          <div>
            phone: <input onChange={phoneChange}></input>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map((person) => (
          <p>
            {person.name} - {person.phone}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
