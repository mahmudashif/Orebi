import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className='container px-8 mx-auto {className}'>{children}</div>
  )
}

export default Container