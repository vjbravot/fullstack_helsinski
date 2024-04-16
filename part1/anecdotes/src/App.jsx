import { useState } from 'react'



const Button = ({handleClick, text}) =>
{
  return (
  <button onClick = {handleClick}>
  <p>{text}</p>
  </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [len, setLen] = useState(anecdotes.length)
  const matrix = () => ({ ... Array.from({length: len}, () => 0)}) 
  const [votes, setVotes] = useState(matrix)
  const currentVotes = votes[selected]
  const maxVotesIndex = Object.entries(votes).reduce((a, b) => a[1] > b[1] ? a : b)[0]


  const setRandom = () =>
  {
  const random = () => Math.floor(Math.random() * len)
  setSelected(random)
  const copy = {...votes}
  }
  const vote = () =>
  {
    const copy = {...votes}
    copy[selected] += 1
    setVotes(copy)
    
  }

  return (
    <div>
      <p><b>Anecdote of the day</b></p>
      <p>{anecdotes[selected]}</p>
      <p>has {currentVotes} votes</p>
      <Button handleClick = {() => vote()} text = "vote"/>
      <Button handleClick = {() => setRandom()} text = "random anecdote"/>
      <p><b>Anecdote with most votes</b></p>
      <p>{anecdotes[maxVotesIndex]}</p>

    </div>
  )
}

export default App