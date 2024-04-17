import { useState } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import AddForm from './components/AddForm'
const App = () => {

  const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)){
      alert(`${newName}  is already on the phonebook`)
    }
    else{
    const newObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    
    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }
}
  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
}
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const contactsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  return (
    <div>
      <Filter value = {newFilter} onChange = {handleFilterChange}/>
      <h2>Phonebook</h2>
      <AddForm 
      addPerson = {addPerson} 
      name = {newName} 
      nameHandler = {handleNameChange}
      number  = {newNumber}
      numberHandler = {handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        {contactsToShow.map(person => <Contact key = {person.name} person = {person}/>)}
        </ul>
    </div>
  )
}


export default App