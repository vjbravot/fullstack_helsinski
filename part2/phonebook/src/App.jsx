import { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import AddForm from './components/AddForm'
import personService from './services/persons'
import Notification from './components/Notification'
const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [persons, setPersons] = useState([])  
  const [showMessage, setShowMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        console.log(initialPersons)
        setPersons(initialPersons)
      })
  }, [])
  


  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)){
      let updatePerson = persons.filter(person => person.name === newName)[0]
      const newObject = {
        id: updatePerson.id,
        name: newName,
        number: newNumber,

      }
      personService
      .update(updatePerson.id)
      .then(() => {
        console.log(persons.filter(person =>person.name !== newName))
        setPersons(persons.filter(person =>person.name !== newName).concat(newObject))
        setShowMessage(`${newObject.name} was modified`)
        setTimeout(() => {
        setShowMessage(null)
      }, 5000)
      }
      )
    }
    else{
    var newID = Math.max(...persons.map(person => person.id)) + 1;
    const newObject = {
      
       id: newID.toString(),
      name: newName,
      number: newNumber
    }
    personService
    .create(newObject)
    .then(() => {
      setPersons(persons.concat(newObject))
      setShowMessage(`${newObject.name} was added`)
      setTimeout(() => {
        setShowMessage(null)
      }, 5000)
      setNewName('')
      setNewNumber('')
    })
    
  }
}

  const handleDelete = id => {
    if (window.confirm("Do you really want to delete the directory?")){
    personService
    .del(id)
    .then(() => {
      setPersons(persons.filter(person => person.id != id))
    })
    .catch(error => {
      setShowMessage(
        `Information of  '${persons.filter(person => person.id === id).name}' was already removed from server`
      )
      setMessageType('error')
      setTimeout(() => {
        setShowMessage(null)
        setMessageType(null)
      }, 5000)
    })
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
      <Notification message = {showMessage} type = {messageType}/>
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
        {contactsToShow.map(person => <Contact key = {person.name} person = {person} handleDelete = {() => handleDelete(person.id)}/>)}
        </ul>
    </div>
  )
}


export default App