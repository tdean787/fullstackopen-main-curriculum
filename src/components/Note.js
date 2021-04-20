import React from "react";

const Note = ({ note }) => {
  return <li key={note.id}>{note}</li>;
};

export default Note;
