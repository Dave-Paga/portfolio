import React from 'react';
import './Projects.css'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';


export default function Projects() {
  return (
    <div id="projects">
      <h1 className='projects-title'>Projects</h1>

      <div className='projects-container'>
        <Card className='project'>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/term_system.jpg"} />
          <Card.Body>
            <Card.Title>T.E.R.M System</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Ticketing System</Card.Subtitle>
            <Card.Text>
            The Ticketing-Expert Repair Maintenance (TERM) System is a web application of an Auto Shop System with a ticketing with Scheduling System.
            </Card.Text>

            <Dropdown className='dropdown'>
              <Dropdown.Toggle data-bs-theme="dark" variant="light">
                Demo Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className='dropdownItem' disabled>Email: admin1@email.com</Dropdown.Item>
                <Dropdown.Item className='dropdownItem' disabled>Password: admin1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Card.Subtitle className="text-muted project-tech">
              Technologies:
              
              {["Angular", "Cloud Firestore", "Firebase Authentication", "JavaScript ", "TypeScript ", "Angular Material"].map((value, key)=> <Button className='technology' size='sm' variant="info" disabled>{value}</Button>)}
            
            </Card.Subtitle>
            <Button className='demoBtns' variant='primary' onClick={() => {window.location.replace('https://term-system.web.app/')}}>Live Demo</Button>
            <Button className='demoBtns' variant='secondary' onClick={() => {window.location.replace('https://github.com/Dave-Paga/termsystem')}}>Source Code</Button>
          </Card.Body>
        </Card>

        <Card  className='project'>
        <Card.Img className='card-img' variant="top" src={process.env.PUBLIC_URL + "/images/card_title.jpg"} />
          <Card.Body>
            <Card.Title>Oppawtunity</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Scheduling Application</Card.Subtitle>
            <Card.Text>
              Oppawtunity is an android application for veterinarians and pet owners. It allows scheduling of appointments to the veterinarian office and easy pet identification through QR code generation.
            </Card.Text>
            <Card.Subtitle className="text-muted project-tech">
              Technologies:
              
              {["Angular", "Cloud Firestore", "Firebase Authentication", "Java", "Android Studio", "Cloud Storage"].map((value, key)=> <Button className='technology' size='sm' variant="info" disabled>{value}</Button>)}
            </Card.Subtitle>
            <Button className='demoBtns' variant='secondary bottom' onClick={() => {window.location.replace('https://github.com/Dave-Paga/Oppawtunity')}}>Source Code</Button>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}
