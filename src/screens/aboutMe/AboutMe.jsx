import React from 'react';
import './aboutMe.css';  // Make sure the CSS file is imported correctly.
import Mateo from '../../images/Mateo.png';

function AboutMe() {
  return (
    <div className='about_container' id='about-me'>
      <div>
        <img src={Mateo} alt="person icon" />
      </div>
      <div className='about_text'>
        <h1>About Me</h1>
        <p>
          Hello! I'm Mateo López Michelini, a passionate individual with a keen interest in technology, numbers, and sports, currently immersed in the exciting field of Data Science. With two years of experience as a backend developer, I have proficiency in Java, JavaScript, MongoDB, MySQL, and Spring Boot, skills that I've applied in various projects showcased in my portfolio.
        </p>
        <p>
          As a former accounting student, my fascination with numbers led me to explore the world of programming and ultimately dive into the realm of Data Science. My goal is to actively contribute in a dynamic environment, applying my expertise in data handling, machine learning, and visualization to generate meaningful insights and support informed decision-making.
        </p>
        <p>
          In my latest project, I evolved as a data engineer, focusing on the architecture and design of automation using Google Cloud Platform (GCP). I am excited to connect with like-minded professionals in the fields of Data Science and technology. Currently, I am actively seeking opportunities in Backend and Data Science. If you are looking for a dedicated and passionate collaborator, let's discuss how we can tackle new challenges together!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

