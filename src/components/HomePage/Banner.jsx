import React from 'react'
import banner from '/src/assets/banner.svg'
import information from '/src/assets/information.svg'

const Banner = () => {
  return (
    <>
    <div>
        <img src={banner} alt="" />
    </div>
    <div>
        <img src={information} alt="" />
    </div>
    </>
  )
}

export default Banner