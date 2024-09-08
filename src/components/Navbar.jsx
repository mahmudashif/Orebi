import React from 'react'

const Navbar = () => {
  return (
    <section className='container px-8 py-8 mx-auto flex'>
        <div className='w-3/12'>
        <img src="/src/assets/logo.svg" alt="" />
    </div>
    <div className='w-9/12'>
        <ul className='flex justify-center gap-x-20 capitalize font-dm'>
            <li className='hover:font-bold'>home</li>
            <li className='hover:font-bold'>shop</li>
            <li className='hover:font-bold'>about</li>
            <li className='hover:font-bold'>contacts</li>
            <li className='hover:font-bold'>journal</li>
        </ul>
    </div>
    </section>
  )
}

export default Navbar