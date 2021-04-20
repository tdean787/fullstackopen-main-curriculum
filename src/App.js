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
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(true);

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
    console.log("click", event.target);
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

  return (
    <div>
      <h1>Courses</h1>
      {/* <Total course={course.parts} /> */}
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
        {/* // <Course name={element.name} /> */}
      </ul>

      <ul>
        {notes.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </ul>
      {/* {notesToShow.map((note) => note.content)} */}

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
  );
};

export default App;
