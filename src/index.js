import ReactDOM from "react-dom";
import App from "./App";

const notes = [
  { content: "html easy", id: 1 },
  { content: "javascript", id: 2 },
];

ReactDOM.render(<App notes={notes} />, document.getElementById("root"));
