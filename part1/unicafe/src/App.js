import { useState } from "react";

function FeedbackButton({onClick, text}) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

function Statistics(props) {
  const allCalculation = () => {
    return props.good + props.neutral + props.bad;
  }

  const averageCalculation = () => {
    return (props.good - props.bad) / allCalculation()
  }

  const positiveCalculation = () => {
    return (props.good / allCalculation()) * 100 + "%";
  }

  return (
    props.good !== 0 || props.neutral !== 0 || props.bad !== 0 ? <>
      <h2>Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Calculation</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text={"Good"} calculation={props.good}/>
          <StatisticLine text={"Neutral"} calculation={props.neutral}/>
          <StatisticLine text={"Bad"} calculation={props.bad}/>

          <StatisticLine text={"All"} calculation={allCalculation()}/>
          <StatisticLine text={"Average"} calculation={averageCalculation()}/>
          <StatisticLine text={"Positive"} calculation={positiveCalculation()}/>
        </tbody>
      </table>
    </> :
    <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </>
  )
}

function StatisticLine(props) {
  return (
  <tr>
    <td>{props.text}</td>
    <td>{props.calculation}</td>
  </tr>
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
