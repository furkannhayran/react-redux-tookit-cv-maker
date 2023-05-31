import React from 'react'

const data = []
function Input({ setInput, compName, span, place }) {
  const handleChange = (e) => {
    const obj = {};
    obj[compName] = e.target.value
    data.push(obj)
    const inputReduce = data.reduce((acc, item) => {
      const key = Object.keys(item)[0];
      const value = Object.values(item)[0];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(value);
      return acc;
    }, {})
    setInput(inputReduce)
    return obj

  }
  return (
    <div className='input-container-ssss'>
      <span>{span}</span>
      <input onChange={(e) => handleChange(e)} placeholder={place} />
    </div>
  )
}

export default Input