import React from 'react'
import '../App.css'
import './MainPage.css'
import Footer from './Footer'

function MainPage() {
  return (
    <>
      <div id='about-me'>
        
        <div className='photoID-container'>
         <img src={process.env.PUBLIC_URL + "/images/dave_pic.JPG"} alt="Profile pic" className='photoID' />
        </div>
        <div className='about-me-container'>
          <h1 className='title'>
            Hi there, I'm Dave
          </h1>
          <p className='about-me-paragraph'>
          I am an Information Systems graduate with a passion for coding. I have a deep understanding of the intersection between business and technology and have expertise in strategic information management and comprehensive software development to design and implement efficient solutions for complex organizational challenges. I am proficient in a wide range of programming languages and frameworks and excel in front-end and back-end development. I also have serveral CompTIA certifications that ensure cybersecurity of the programs I develop.
          </p>
        </div>
      </div>

      <div id='skills'>
        <h1 className='skills-title'>Skills</h1>
      </div>
      <Footer />
    </>
  )
}

export default MainPage