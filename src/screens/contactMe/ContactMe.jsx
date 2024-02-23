/* ContactMe.jsx */

import React from 'react';
import './contactMe.css';

function ContactMe() {
  return (
    <div className='contactSection_container' id='contact'>
      <div>
        <h1 style={{textAlign: 'center'}}> CONTACT ME</h1>
      </div>
      <div className='contactSection_intro_buttons'>
        <div className='contactSection_intro'>
            <p>
            Hello again, if you want to build amazing things or contact me for suggestions or questions, you can send me an email or a direct message on my social networks.
            </p>
        </div>
        <div className='contactSection_buttons'>
            <button className="contactSection_email_button" onClick={() => window.location.href = 'mailto:mateolopez27.11@gmail.com'}>
            Message
            </button>
            <div className='contactSection_links'>
            <a href="https://github.com/luifa04" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>{' '}
            {' '}
            <a href="https://www.linkedin.com/in/mateo-lopez-ba06861b3/" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
            </div>
        </div>
      </div>

    </div>
  );
}

export default ContactMe;


