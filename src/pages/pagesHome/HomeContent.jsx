import React, { useState } from 'react'
import Home from './Home'
import HomeAfter from './HomeAfter'
import '../../css/homeContent.scss'
import { Link } from 'react-router-dom'
import { BsPlusCircle } from 'react-icons/bs'
import { AiOutlineMinusCircle } from 'react-icons/ai'
// import { CSSTransition } from 'react-transition-group';
function HomeContent() {
    const [visible, setVisible] = useState(true)
    return (
        <div className='homeContent-container'>
            <div className='homecontent-navbar'>
                <Home />
                {visible === true ?
                    // <CSSTransition in={visible} timeout={3000} classNames="my-transition">
                        
                        <HomeAfter /> 
                    // </CSSTransition>
                    : ""
                }
                <div className='ekbilgiler-container'>
                <div className='ekbilgiler'>
                    {visible === true ? <AiOutlineMinusCircle className='ekbilgi-icon' /> : <BsPlusCircle className='ekbilgi-icon' />}
                    <Link className='ekbilgi-link' onClick={() => setVisible(!visible)}>Ek Bilgiler</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent