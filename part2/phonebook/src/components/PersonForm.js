import React from 'react'

function PersonForm({onSubmit, newName, handleNameChange, newNumber, handleNumberChange}) {
  return (
    <form onSubmit={onSubmit}>
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
  )
}

export default PersonForm