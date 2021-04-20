import ReactDOM from "react-dom";
import App from "./App";

const notes = [
  { content: "html easy", id: 1, important: true },
  { content: "javascript", id: 2, important: false },
];

ReactDOM.render(
  <App notes={notes} key={notes} />,
  document.getElementById("root")
);
