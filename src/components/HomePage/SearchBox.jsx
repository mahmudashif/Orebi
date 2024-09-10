import React from 'react'

const SearchBox = () => {
  return (
    <div className='w-[400px] relative'>
        <input className='w-full py-4 px-5 font-dm' placeholder='Search Products'/>
        <img src="/src/assets/searchBoxIcon.svg" className='absolute top-5 right-4' alt="" />
    </div>
  )
}

export default SearchBox