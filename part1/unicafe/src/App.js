import { useState } from "react";

function FeedbackButton({onClick, text}) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

function Statistics(props) {
  return (
    props.good !== 0 || props.neutral !== 0 || props.bad !== 0 ? <>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.good + props.neutral + props.bad}</p>
      <p>Average: {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
      <p>Positive: {(props.good) / (props.good + props.neutral + props.bad) * 100}%</p>
    </> :
    <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </>
  )
}

function App() {
  // states
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  }

  const increaseBad = () => {
    setBad(bad + 1);
  }

  return (
    <div className="App">
      <h1>Give feedback</h1>

      <FeedbackButton onClick={increaseGood} text={"Good"} />
      <FeedbackButton onClick={increaseNeutral} text={"Neutral"} />
      <FeedbackButton onClick={increaseBad} text={"Bad"} />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
