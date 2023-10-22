import React from 'react'
import './contactMe.css'
import {navigationLinks} from '../../helpers/navigationLinks'

function createLink(){
    return navigationLinks.map((e , idx) =>(
        <p key={idx}><a href={e.ref}>{e.home}</a></p>
    ))
}

function ContactMe() {
  return (
    <div className='contactMe_container' id='contact'>
        <div className='contactMe_data_links'>
            <div>
                <p>Mateo Lopez Michelini</p>
                <p>mateolopez27.11@gmail.com</p>
            </div>
            <div>
                {createLink()}
            </div>
        </div>
        <div style={{ textAlign:"center" }}>
            Copyright&copy; {new Date().getFullYear()} All rights reserved
        </div>
    </div>
  )
}

export default ContactMe