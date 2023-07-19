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
        <h1 className='title-white'>Skills</h1>

        <div className='skills-container'>
          <div className='skills-container2'>
            <div className='logo'><i class="fa-brands fa-html5 fa-beat fa-2xl"></i></div>
            <h2 className='title-white skill-title'>Front-End</h2>
            <ul className='skill-list'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Angular</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className='skills-container2'>
            <div className='logo'><i class="fa-solid fa-gear fa-spin fa-2xl"></i></div>
            <h2 className='title-white skill-title'>Back-End</h2>
            <ul className='skill-list'>
              <li>Python</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div className='skills-container2'>
            <div className='logo'><i class="fa-solid fa-wrench fa-bounce fa-2xl"></i></div>
            <h2 className='title-white skill-title'>Tools</h2>
            <ul className='skill-list'>
              <li>Git</li>
              <li>GitHub</li>
              <li>VSCode</li>
              <li>Typescript</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MainPage