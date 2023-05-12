import React from 'react'

function OneSelected({onespan,place,twospan,data}) {
    return (
        <div className='oneSelected-container'>
            <div className='oneSelected-navbar-one'>
                <span>{onespan}</span>
                <input placeholder={place}/>
            </div>
            
            <div className='oneSelected-navbar-two'>
                <span>{twospan}</span>
                <select>
                    {data.map(item=>(
                        <option value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default OneSelected