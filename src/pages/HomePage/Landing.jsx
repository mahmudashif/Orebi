import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Header from './Header.jsx'
import Banner from './Banner'
import Advertise from './Advertise'
import NewArrivals from './NewArrivals'
import AdBanner from './AdBanner'
import SpecialOffer from './SpecialOffer'
import Footer from '../../components/Footer.jsx'

const Landing = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Banner/>
    <Advertise/>
    <NewArrivals/>
    <AdBanner/>
    <SpecialOffer/>
    <Footer/>
    </>
  )
}

export default Landing