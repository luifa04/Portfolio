import React from 'react'
import './header.css'
import Typed from'react-typed'

function Header() {
  return (
    <div className='main-info'>
        <h1>What I am</h1>
        <Typed
        strings={[
                    ' ',
                    'a backend developer',
                    'a data scientist',
                    'a basketball player ;)',
                    ' ',
                    ' ',]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop 
        />
    </div>
  )
}

export default Header