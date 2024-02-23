import React, { useState, useEffect } from 'react';
import './header.css';

function Header() {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = [
    'a backend developer',
    'a data scientist',
    'a basketball player ;)'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [textOptions.length]); // Agrega textOptions.length a la lista de dependencias

  return (
    <div className='main-info'>
      <h1>What I am</h1>
      <p>{textOptions[textIndex]}</p>
    </div>
  );
}

export default Header;
