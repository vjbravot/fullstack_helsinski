import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    <p>{text}</p>
  </button>
)

const Statistics = ({statistics}) => {
  return (
  <div>
  <p><b>statistics</b></p>
  <table>
  <StatisticLine text = "good" value = {statistics.good}/>
  <StatisticLine text = "neutral" value = {statistics.neutral}/>
  <StatisticLine text = "bad" value = {statistics.bad}/>
  <StatisticLine text = "average" value = {statistics.score}/>
  <StatisticLine text = "positive" value = {statistics.positive}/>
  </table>
  </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
      <tr>
        <td>{text}</td> <td>{value}</td>
      </tr>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [statistics, setStatistics] = useState({"good": 0, "neutral": 0, "bad": 0, "score": 0, "positive": 0})

  const increase = (text) => {
    const copy = {...statistics}
    copy[text] += 1
    copy["score"] = (copy["good"] - copy["bad"]) / (copy["good"] + copy["neutral"] + copy["bad"])
    copy["positive"] = (copy["good"]) / (copy["good"] + copy["neutral"] + copy["bad"])
    setStatistics(copy)
  }

  return (
    <div>
      <p><b>give feedback</b></p>
      <Button handleClick = {() => increase("good")} text = "good" />
      <Button handleClick = {() => increase("neutral")} text = "neutral" />
      <Button handleClick = {() => increase("bad")} text = "bad" />
      <Statistics statistics = {statistics} />
    </div>
  )
}

export default App