import React from 'react'

export default function Find({search, onChange}) {
  return (
    <label>
      Find Countries:
      <input value={search} onChange={onChange}/>
    </label>
  )
}
