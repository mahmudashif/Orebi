import React from 'react'

const Badge = ({title}) => {
  return (
    <span className='text-[#ffff] bg-secondaryBg px-8 py-2 font-dm absolute top-5 left-5'>{title}</span>
  )
}

export default Badge