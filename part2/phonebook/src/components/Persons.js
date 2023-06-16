import React from 'react'

export default function Persons({people, deleteName}) {
  return (
    <div>
      {people.map((person) => (
        <p key={person.id}>{person.name}
          {person.number}
          <button onClick={deleteName} data-key={person.id}>Delete</button>
        </p>
      ))}
    </div>
  )
}
