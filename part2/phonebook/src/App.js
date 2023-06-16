import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import peopleService from './services/people';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    peopleService
      .getAll()
      .then(initialPeople => {
        setPersons(initialPeople);
      });
  }, []);

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const submitName = (event) => {
    event.preventDefault();

    const nameExist = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (nameExist !== undefined) {
      if(!window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        return;
      };

      // User wants to be updated.
      return updateNumber();
    }

    const personObject = {
      name: newName,
      number: newNumber
    };

    peopleService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${personObject.name}`);
      })
  }

  const updateNumber = () => {
    const matchedPerson = persons.find(person => person.name === newName);
    
    const personObject = {...matchedPerson, number: newNumber};

    peopleService
      .update(matchedPerson.id, personObject)
      .then(returnedPerson => {
        setPersons(persons.map(people => people.id !== matchedPerson.id ? people : returnedPerson))
        setNewName("");
        setNewNumber("");

        setMessage(`Updated ${personObject.name}`);
      })
  }

  const deleteName = (event) => {
    const id = event.target.getAttribute("data-key");
    const selectedPerson = persons.find(person => person.id.toString() === id);

    if(!window.confirm(`Are you sure you wish to delete ${selectedPerson.name}?`)) {
      return;
    }

    peopleService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== parseInt(id)))
        setMessage(`Deleted ${selectedPerson.name}`);
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} error={false}/>

      <Filter filter={filter} onChange={handleFilterChange} />

      <h3>Add a new:</h3>
      <PersonForm onSubmit={submitName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      
      <h3>Numbers</h3>
      <Persons people={peopleToShow} deleteName={deleteName}/>
    </div>
  )
}

export default App