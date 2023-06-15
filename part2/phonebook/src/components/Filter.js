import React from 'react'

function Filter({filter, onChange}) {
  return (
    <form>
      Filter name by <input value={filter} onChange={onChange}/>
    </form>
  )
}

export default Filter