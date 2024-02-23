import React, { useState, useEffect } from 'react';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigationLinks } from '../../helpers/navigationLinks';

function createLink() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>
      {e.home}{' '}
    </Nav.Link>
  ));
}

const nameOptions = ['', 'Mateo Lopez Michelini'];

function NavigationBar() {
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNameIndex((prevIndex) => (prevIndex + 1) % nameOptions.length);
    }, 2000); // Cambia el tiempo según tus preferencias

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id='home'>
      <Navbar
        className='navigation_container'
        style={{ zIndex: '2', position: 'fixed', top: '0', width: '100%' }}
        collapseOnSelect
        expand='md'
      >
        <Navbar.Brand style={{ marginLeft: '1rem' }}>
          {nameOptions[nameIndex]}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          style={{
            justifyContent: 'flex-end',
            marginRight: '1rem',
            borderColor: 'none',
          }}
        >
          <Nav className='links' style={{ margin: '0 1rem' }}>
            {createLink()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;