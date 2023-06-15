const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const execises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;


  return (
    <div>
      <h1>{course}</h1>

      <p>
        {part1} {execises1}
      </p>

      <p>
        {part2} {exercises2}
      </p>

      <p>
        {part3} {exercises3}
      </p>

      <p>Number of exercises {execises1 + exercises2 + exercises3} </p>
    </div>
  );
}

export default App;
