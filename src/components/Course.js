import React from "react";

const Course = (props) => {
  return (
    <div>
      <h2> {props.name} </h2>
      {props.parts.map((element) => {
        return (
          <p>
            {element.name} : {element.exercises}
          </p>
        );
      })}
      <strong>
        Total Exercises:
        {props.parts
          .map((element) => element.exercises)
          .reduce((a, b) => a + b)}
      </strong>
    </div>
  );
};

export default Course;
