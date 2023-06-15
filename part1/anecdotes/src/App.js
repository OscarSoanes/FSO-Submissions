import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0);
  const [highestVoteId, setHighestVoteId] = useState(0);

  const increaseSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const increaseVoteAtSelected = () => {
    const newPoints = [...points];
    newPoints[selected] += 1
     setPoints(newPoints);

    topAnecdote(newPoints);
  }

  const topAnecdote = (points) => {
    const top = {
      votes: -1,
      index: -1,
    };

    points.forEach((vote, index) => {
      if (top.votes < vote) {
        top.votes = vote;
        top.index = index;
      }
    })
    
    if (topAnecdote.index !== highestVoteId) {
      setHighestVoteId(top.index);
    }
  }

  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{points[selected]} votes</p>

      <button onClick={increaseVoteAtSelected}>Vote</button>
      <button onClick={increaseSelected}>Next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highestVoteId]}</p>
      <p>{points[highestVoteId]} votes</p>
    </div>
  );
}

export default App;
