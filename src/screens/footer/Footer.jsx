import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer_container'>
      <p>Mateo Lopez Michelini</p>
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
    </div>
  );
}

export default Footer;