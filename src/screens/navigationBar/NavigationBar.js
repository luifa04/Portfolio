import React from 'react'
import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {navigationLinks} from '../../helpers/navigationLinks'
import Typed from'react-typed'


function createLink(){
    return navigationLinks.map((e , idx) =>(
        <Nav.Link key={idx} href={e.ref}>{e.home} </Nav.Link>
    ))
}

function NavigationBar() {
  return (
    <div id='home'>
        <Navbar className='navigation_container'
        style={{zIndex:'2', position:'fixed', top: '0', width:'100%'}}
        collapseOnSelect
        expand='md'>
        <Navbar.Brand style={{marginLeft:'1rem'}} >
        <Typed
        strings={[
                    ' ',
                    'Mateo Lopez Michelini']}
                    typeSpeed={60}
                    backSpeed={50}
                    loop 
        /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{justifyContent: 'flex-end', marginRight:'1rem', borderColor: 'none'}}>
          <Nav className='links' style={{margin: '0 1rem'}}>
            {createLink()}
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavigationBar