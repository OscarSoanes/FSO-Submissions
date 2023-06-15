import { useState } from "react";

function FeedbackButton({onClick, text}) {
  return (
    <button onClick={onClick}>{text}</button>
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

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {(good - bad) / (good + neutral + bad)}</p>
      <p>Positive: {(good) / (good + neutral + bad)}%</p>
    </div>
  );
}

export default App;
