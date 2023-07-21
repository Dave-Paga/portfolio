import React from 'react';
import Card from 'react-bootstrap/Card';
import './Footer.css';


function Footer() {

  const redirectGithub = () => {
    window.location.replace('https://github.com/Dave-Paga/')
  }

  const redirectLinkedIn = () => {
    window.location.replace('https://www.linkedin.com/in/dave-pagaduan/')
  }
  return (
    <div className='footer-container'>
      <h1 id='contact-me'>Contact Me</h1>
      <section className='contact-links'>
        <Card className='links' onClick={() => window.location = 'mailto:dave.c.pagaduan@gmail.com'}>
          <Card.Body>
            <Card.Title>
              <i class="fa-solid fa-envelope fa-lg"></i> Email
            </Card.Title>
            <Card.Text>
              Let's get in touch
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='links' onClick={redirectLinkedIn} style={{ cursor: "pointer" }}>
          <Card.Body>
            <Card.Title>
              <i class="fa-brands fa-linkedin fa-lg"></i> LinkedIn
            </Card.Title>
            <Card.Text>
              Let's connect
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='links' onClick={redirectGithub} style={{ cursor: "pointer" }}>
          <Card.Body>
            <Card.Title>
              <i class="fa-brands fa-github fa-lg"></i> Github
            </Card.Title>
            <Card.Text>
              Check out my repos
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

export default Footer;