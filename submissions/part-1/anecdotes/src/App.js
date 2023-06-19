import { useState } from "react";

const ANECDOTES = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(ANECDOTES.length).fill(0));

  const highestVoted = Math.max(...votes);
  const index = votes.indexOf(highestVoted);

  const bestAnecdote = highestVoted !== 0 ? ANECDOTES[index] : null;

  const getRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * ANECDOTES.length));
  };

  const voteAnecdote = () => {
    const nextVotes = [...votes];
    nextVotes[selected] += 1;
    setVotes(nextVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {ANECDOTES[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={getRandomAnecdote}>Next Anecdote!</button>
      <br />
      <h1>Anecdote with the most votes</h1>
      {bestAnecdote ? bestAnecdote : "No votes yet!"}
    </div>
  );
};

export default App;
