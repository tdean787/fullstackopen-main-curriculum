import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>
        {" "}
        Hello {props.name}. Apparently, you are {props.age} years old.{" "}
      </p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.body} = {props.exercises}
      </p>
    </div>
  );
};

const Header = () => {
  const course = "Half Stack application development";
  return (
    <div>
      <h1> {course}</h1>
    </div>
  );
};

const Content = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Part body={part1} exercises={exercises1} />
      <Part body={part2} exercises={exercises2} />
      <Part body={part3} exercises={exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "Severus";
  const age = 47;
  console.log("hello");

  return (
    <div>
      <Header />
      <Content />
      <Total exercises1={10} exercises2={7} exercises3={14} />
      <Hello name="Taylor" age={95} />
      <Hello name={name} age={age} />
      <p>It is now {now.toString()}</p>
      <p>
        {a} + {b} equals {a + b}
      </p>
    </div>
  );
};

export default App;
