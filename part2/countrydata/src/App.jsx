import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import countryService from './services/countries'
import Display from './components/Display'

function App() {
  const [nameList, setNameList] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [capitals, setCapitals] = useState([])
  
  useEffect(() => {
    countryService
      .getNames()
      .then(nameList => {
        setNameList(nameList.map(nl => nl.name.common))
        setCapitals(nameList.map(nl => nl.capital))
      }
      )
  }, []) 

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const countriesToShow = nameList.filter(nl => nl.toLowerCase().includes(newFilter.toLowerCase()))
  return (
    <>
    <Filter value = {newFilter} handler = {handleFilterChange}/>
      {countriesToShow.length > 0 && 
        <div> 
        <Display countries = {countriesToShow} filter = {setNewFilter} capitals = {capitals}/> 
        </div>}
    </>
   
  )
}
export default App
