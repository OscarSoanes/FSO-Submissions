import React from 'react'

export default function Persons({people}) {
  return (
    <div>
      {people.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}
