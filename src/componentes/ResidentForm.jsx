import React from 'react'
import "./styles/ResidentForm.css" 

const ResidentForm = ({handleSubmit}) => {
  return (
    <form className='residentForm' onSubmit={handleSubmit}>
        <input type="text" id="idLocation" placeholder='type a location id'/>
        <button>Search</button>
    </form>
  )
}

export default ResidentForm