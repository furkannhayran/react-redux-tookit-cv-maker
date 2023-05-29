import React from 'react'
import { useDispatch } from 'react-redux';
import { inputCity, inputWorktitle } from '../../redux/property';
const data = []
const dataCity = []

function Inputs({compName, onespan,onePlace ,twospan,twoPlace }) {
  const dispatch = useDispatch()
  var RickTextObj = {};
  var RickTextObjCity = {}
  const workHandleChange = (e) =>{
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
      dispatch(inputWorktitle(groupedData))
    }
  }

  const inputCityHandleChange = (e) =>{
    const value = e.target.value;
    RickTextObjCity[compName] = value
    dataCity.push(RickTextObjCity)
    if (dataCity.length > 1) {
      const groupedData = dataCity.reduce((acc, item) => {
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];

        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(value);
        return acc;
      }, {});
      dispatch(inputCity(groupedData))
    }
  }
  return (
    <div className='inputs-container'>
        <div className='inputs-navbar-one'>
            <span >{onespan}</span>
            <input onChange={(e) => workHandleChange(e)}  placeholder={onePlace}/>
        </div>
        <div className='inputs-navbar-two'>
            <span>{twospan}</span>
            <input onChange={(e) => inputCityHandleChange(e)} placeholder={twoPlace}/>
        </div>
    </div>
  )
}

export default Inputs