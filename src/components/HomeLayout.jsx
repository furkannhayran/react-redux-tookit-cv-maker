import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/pagesFooter/Footer'
import Cvmaker from './Cvmaker'
import Cvinfo from './Cvinfo'
import CvProgress from './CvProgress'
import './css/cvHeader.scss'
function HomeLayout() {
  return (
    <div>
      <Cvmaker/>
      <Cvinfo title = "Kişisel Bilgiler"/>
      <CvProgress/>
      <Outlet/>
      
    <Footer/>
    </div>
  )
}

export default HomeLayout