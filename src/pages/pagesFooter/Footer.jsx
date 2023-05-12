import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
function Footer() {
  return (
    <div className='footer-container' >
      <div className='footer-navbar'>
        <div className='footer-navbar-next'>
          <Link className='footer-navbar-next-link' to="/gecmis">Sonraki Adım</Link>
          <AiOutlineArrowRight />
        </div>
        <div>
        <Link className='footer-navbar-next-link' to="/sablon">soblon</Link>

        </div>
      </div>

      {/* <Link to="/sablon">en sonraki Adım</Link> */}
    </div>
  )
}

export default Footer