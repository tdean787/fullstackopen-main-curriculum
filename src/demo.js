import React, { useState } from "react";

//destructuring. take props passed in directly and assign properties
const Hello = ({ name, age }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };
  return (
    <div>
      <p>
        {" "}
        Hello {name}. Apparently, you are {age} years old.{" "}
      </p>
      <p>Maybe you were born in {bornYear()}?</p>
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

const Header = (props) => {
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  const list = document.querySelector(".list");

  return (
    <div>
      <ul class="list">
        {props.parts.forEach((element) => {
          <Part body={element.name} exercises={element.exercise} />;
        })}
        <Part body={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part body={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part body={props.parts[2].name} exercises={props.parts[2].exercises} />
      </ul>
    </div>
  );
};

const Total = (props) => {
  let sum = 0;
  return (
    <div>
      <p>
        Number of exercises
        {props.parts.forEach((el) => {
          sum += el.exercises;
        })}
        {sum}
      </p>
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseOne = () => {
    setCounter(counter + 1);
    setAll(allClicks.concat("+1"));
  };

  const setZero = () => {
    setCounter(0);
    setAll([]);
    setClicks({
      left: 0,
      right: 0,
    });
  };

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
    setAll(allClicks.concat("L"));
  };

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
    setAll(allClicks.concat("R"));
  };

  // setTimeout(() => setCounter(counter + 1), 1000);
  const course = {
    name: "Half Stack application development",
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
  };

  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "Severus";
  const age = 47;

  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Hello name={name} age={age} />
      <p>It is now {now.toString()}</p>
      <p>
        {a} + {b} equals {a + b}
      </p>

      <Button handleClick={increaseOne} text="Add" />
      <Button handleClick={setZero} text="Reset" />
      <Display counter={counter} />

      <div>
        {clicks.left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {clicks.right}
      </div>
      <History allClicks={allClicks} />

      <button onClick={() => setToValue(1000)}> Thousand </button>

      {value}
    </div>
  );
};

export default App;
