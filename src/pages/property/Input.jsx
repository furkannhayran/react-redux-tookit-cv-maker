import React from 'react'

function Input({span,place}) {
  return (
    <div className='input-container-ssss'>
        <span>{span}</span>
        <input placeholder={place}/>
    </div>
  )
}

export default Input