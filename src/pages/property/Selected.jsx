import React from 'react'

function Selected({ onespan, onemoon, oneyil, twospan, twomoon, twoyil }) {
    return (
        <div className='selected-container'>
            <div className='selected-container-navbar'>
                <span className='selected-container-navbar-span'>{onespan}</span>
                <div className='selected-container-navbar-content'>
                    <select className='selected-container-navbar-content-one-select'>
                        {onemoon.map((item, i) => (
                            <option key={i}>{item.moon}</option>
                        ))}
                    </select>
                    <select className='selected-container-navbar-content-two-select'>
                        {oneyil.map((item, i) => (
                            <option key={i}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='selected-container-navbar-two'>
                <span className='selected-container-navbar-span-two'>{twospan}</span>
                <div className='selected-container-navbar-content-two' >
                    <select className='selected-container-two-navbar-content-one-select'>
                        {twomoon.map((item, i) => (
                            <option key={i}>{item.moon}</option>
                        ))}
                    </select>
                    <select className='selected-container-two-navbar-content-two-select'>
                        {twoyil.map((item, i) => (
                            <option key={i}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Selected