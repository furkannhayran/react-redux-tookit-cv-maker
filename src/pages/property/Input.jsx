import React, { useState } from 'react'
import { inputChangeValue } from '../../redux/property';
import { useDispatch } from 'react-redux';

const data = []
function Input({compName, span,place}) {
  const dispatch = useDispatch()
  var RickTextObj = {};
  const handleChange = (e) =>{
    const value = e.target.value;
    RickTextObj[compName] = value
    data.push(RickTextObj)
    if (data.length > 1) {
      const groupedData = data.reduce((acc, item) => {
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];

        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(value);
        return acc;
      }, {});
      dispatch(inputChangeValue(groupedData))
    }

  }
  return (
    <div className='input-container-ssss'>
        <span>{span}</span>
        <input onChange={(e) => handleChange(e)} placeholder={place}/>
    </div>
  )
}

export default Input