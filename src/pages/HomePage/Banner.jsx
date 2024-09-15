import React from 'react'
import banner from '/src/assets/banner.svg'
import informationImg from '/src/assets/informationImg.svg'

const Banner = () => {
  return (
    <>
    <div>
        <img src={banner} alt="" />
    </div>
    <div>
        <img src={informationImg} alt="" />
    </div>
    </>
  )
}

export default Banner