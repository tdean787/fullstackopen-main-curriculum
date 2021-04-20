import React, { useState } from "react";
import "./index.css";

const Button = ({ handleClick, text }) => (
  <button class="btn" onClick={handleClick}>
    {text}
  </button>
);

const Statistic = (props) => {
  return (
    <tr>
      <td> {props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  //   if (!props.positive) {
  //     return <p> No feedback given </p>;
  //   }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="Average" value={props.average} />
          <Statistic text="Percent positive" value={props.positive} />
          <Statistic text="Good" value={props.good} />
          <Statistic text="Neutral" value={props.neutral} />
          <Statistic text="Bad" value={props.bad} />
          <Statistic text="Total" value={props.total} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;

  const positive = (good / total) * 100;

  const increaseGood = () => setGood(good + 1);

  const increaseBad = () => setBad(bad + 1);

  const increaseNeutral = () => setNeutral(neutral + 1);

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const voteArray = Array.apply(null, new Array(anecdotes.length)).map(
    Number.prototype.valueOf,
    0
  );

  const [selected, isSelected] = useState(0);
  const [votes, setVotes] = useState(voteArray);
  const randomizeAnecdote = (max) => {
    isSelected(Math.floor(Math.random() * anecdotes.length));
    console.log(selected);
  };

  const handleVote = () => {
    const newVoteArray = [...votes];
    newVoteArray[selected] += 1;
    console.log(newVoteArray);
    setVotes(newVoteArray);
  };

  const highestVoteIndex = [...votes].indexOf(Math.max(...votes));

  return (
    <div>
      <div>
        {" "}
        <h2>FullStackOpen part1 exercises - unicafe</h2>
        <Button handleClick={increaseGood} text="good" />
        {good}
        <br></br>
        <Button handleClick={increaseNeutral} text="Neutral" />
        {neutral}
        <br></br>
        <Button handleClick={increaseBad} text="Bad" />
        {bad}
        <Statistics
          average={(total / 3).toFixed(2)}
          positive={positive.toFixed(2)}
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
        />
      </div>

      <div>
        <h2>part2 - anecdotes</h2>
        <p>{anecdotes[selected]}</p>
        <button onClick={handleVote}>Vote +1</button>
        <button onClick={randomizeAnecdote}>Next anecdote</button>
        <h2>max vote anecdote</h2>
        {anecdotes[highestVoteIndex]}
      </div>
    </div>
  );
};

export default App;
