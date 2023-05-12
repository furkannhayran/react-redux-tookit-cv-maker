import React from 'react'

function Inputs({onespan,onePlace ,twospan,twoPlace }) {
  return (
    <div className='inputs-container'>
        <div className='inputs-navbar-one'>
            <span >{onespan}</span>
            <input  placeholder={onePlace}/>
        </div>
        <div className='inputs-navbar-two'>
            <span>{twospan}</span>
            <input placeholder={twoPlace}/>
        </div>
    </div>
  )
}

export default Inputs