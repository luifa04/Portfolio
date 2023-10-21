import React from 'react'
import './aboutMe.css'
import Mateo from '../../images/Mateo.png'

function AboutMe() {
  return (
    <div className='about_container' id='about-me'>
      <div>
        <img src={Mateo} alt="person icon" />
      </div>
      <div className='about_text'>
        <h1>About Me</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam neque nulla accusantium quod esse qui suscipit, laborum dolorum nam illum soluta et aperiam ipsam eum repellendus quam porro unde corrupti.</p>
      </div>
    </div>
  )
}

export default AboutMe