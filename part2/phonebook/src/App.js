import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 0 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 1 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 2 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 3 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const peopleToShow = persons.filter(person => 
    person.name.toLowerCase()
    .includes(filter.toLowerCase()
  ));

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const submitName = (event) => {
    event.preventDefault();

    const nameExist = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (nameExist !== undefined) {
      return alert(`${newName} is already added to the phonebook.`)
    }

    const personObject = {
      name: newName,
      id: persons.length,
      number: newNumber
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitName}>
        <div>
          <div>
            Name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            Number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleToShow.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App