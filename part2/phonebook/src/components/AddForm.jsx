const AddForm = ({addPerson, name, nameHandler, number, numberHandler }) => {
    return(
    <form onSubmit={addPerson}>
          name: <input 
          value={name} 
          onChange={nameHandler}/>
          number: <input
          value={number}
          onChange={numberHandler}/>
          <button type="submit">add</button>
      </form>
    )
}

export default AddForm