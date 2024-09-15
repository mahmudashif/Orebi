import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Banner from './Banner'
import Advertise from './Advertise'
import NewArrivals from './NewArrivals'
import AdBanner from './AdBanner'
import SpecialOffer from './SpecialOffer'
import Footer from '../Footer'

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