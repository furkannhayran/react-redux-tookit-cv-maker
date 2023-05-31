import React from 'react'
const dataWork = []
const dataCity = []

function Inputs({ compName, onespan, onePlace, twospan, twoPlace, setInputCityHandleChange, setWorkHandleChange }) {
  const workHandleChange = (e) => {
    const obj = {};
    obj[compName] = e.target.value
    dataWork.push(obj)
    const inputReduce = dataWork.reduce((acc, item) => {
      const key = Object.keys(item)[0];
      const value = Object.values(item)[0];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(value);
      return acc;
    }, {})
    setWorkHandleChange(inputReduce)
    return obj
  }

  const inputCityHandleChange = (e) => {
    const obj = {};
    obj[compName] = e.target.value
    dataCity.push(obj)
    const inputReduce = dataCity.reduce((acc, item) => {
      const key = Object.keys(item)[0];
      const value = Object.values(item)[0];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(value);
      return acc;
    }, {})
    setInputCityHandleChange(inputReduce)
    return obj
  }


  return (
    <div className='inputs-container'>
      <div className='inputs-navbar-one'>
        <span >{onespan}</span>
        <input
          onChange={(e) => workHandleChange(e)}
          placeholder={onePlace} />
      </div>
      <div className='inputs-navbar-two'>
        <span>{twospan}</span>
        <input
          onChange={(e) => inputCityHandleChange(e)}
          placeholder={twoPlace} />
      </div>
    </div>
  )
}

export default Inputs